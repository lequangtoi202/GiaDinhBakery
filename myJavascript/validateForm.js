
// Object Validator
function Validator(options) {

    function getParentElement(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector))
            {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    var selectorRules = {};
    //Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParentElement(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage = rule.test(inputElement.value);
        var rules = selectorRules[rule.selector]// ;ấy các hàm của ô iput tương ứng

        //Lặp qua từng rules và check
        for (let i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value);
            if(errorMessage) break; // nếu có lỗi thì không lặp qua các rules sau
        }


        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid')
        }else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid')
        }
        return !errorMessage;
    }

    var formElement = document.querySelector(options.form);

    if(formElement) {
        formElement.onsubmit = function(e) {
            e.preventDefault();
            
            var isFormValid = true;

            options.rules.forEach(function(rule) {
                var inputElement = document.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {  
                if (typeof options.onsubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]')
                    var formValues = Array.from(enableInputs).reduce(function(values, input) {
                        values[input.name] = input.value
                        return values;
                    }, {})

                    options.onsubmit(formValues);
                } else {
                    formElement.submit();
                }
            }
        }

        // lặp qua các rule để lắng nghe sự kiện
        options.rules.forEach(rule => {
            // lưu các rule vào object
            if (Array.isArray(selectorRules[rule.selector])){ // kiểm tra nó là mảng thì push thêm vào
                selectorRules[rule.selector].push(rule.test);
            }else{
                selectorRules[rule.selector] = [rule.test];// gán cho gtri đầu tiên của mảng
            }
            
            var inputElement = formElement.querySelector(rule.selector);
            
            if (inputElement) {
                // Xử lý khi blur
                inputElement.onblur = function() {
                    validate(inputElement, rule);
                }

                //Xử lý khi đang nhập 
                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
            
        });
    }
}



//Indentify rules
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test(value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này';
        },
    }
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test(value) {
            var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return mailFormat.test(value) ? undefined : 'Trường này phải là email';
        },
    }
}
Validator.minLength = function(selector, min) {
    return {
        selector: selector,
        test(value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự` ;
        },
    }
}
Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test(value) {
            return value === getConfirmValue() ? undefined : message || 'Vui lòng nhập trường này';
        },
    }
}
