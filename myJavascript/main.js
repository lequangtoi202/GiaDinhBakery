$(document).ready(function() {
   //create btn back to top
   $(window).scroll(function () { 
		var pos = $('html, body').scrollTop()
		if(pos > 1000){
			$('.bttop').show()
		}else{
			$('.bttop').hide()
		}
	})

	$(".bttop").click(function (e){
		$('html, body').animate({
			scrollTop: 0,
		},0)
	})

	//liên kết news khi trên mobile
	$('.news').click(() =>{
		$('.menu-mobile-overlay').hide()
		$('.mobile-main-menu-wrap').hide()
		$(".news").attr("href", "#news")
	})
	//focus input thì hiện <> ẩn
	$('.search-field').focus(function() {
		$('.history').show()

		$(document).click(function(e){
			const searchArea = $('.search')
			if(!searchArea.is(e.target) && searchArea.has(e.target).length === 0){
				
				$('.history').hide()
			}
		})
	})
	
	var arrList = $('.history-list-item')
	$('.search-field').keyup(function (e) { 
		var keyCode = (e.keyCode ? e.keyCode : e.which) //which là lấy mã trong FI những browser khác hỗ trợ cả 2
		const textContent = $(this).val()
		if(keyCode == '13'){
			if (textContent != ''){
				let html = ''
				html +=  `<li class="history-list-item">
							<a href="product.html"><i class="fas fa-history"></i>${textContent}</a>
							<span class="delete">&times;</span>
							</li>`
				$('.history-list').append(html)
				arrList.length++
			}
			//delete history list item
			deleteHistorySearchItem()
			$(this).val(null)
			$(this).focus()
		}

		//append = button
		$('.search-btn').click(function() {
			let textContent = $('.search-field').val()
			if (textContent != ''){
				
				let html = ''
				html +=  `<li class="history-list-item">
							<a href="product.html"><i class="fas fa-history"></i>${textContent}</a>
							<span class="delete">&times;
							</span>
							</li>`
				$('.history-list').append(html)
				arrList.length++
			}
			//delete history list item
			deleteHistorySearchItem()
			$('.search-field').val(null)
			$('.search-field').focus()
				
		})
	})
	
	
	deleteHistorySearchItem()
	function deleteHistorySearchItem(){
		$('.delete').on('click', function(e) {
			//query lại để lấy số lượng thẻ
			$(this).parent().remove()
			arrList.length--
			if(arrList.length == 0){
				$('.history').hide()
			}
		})
	}
	
	
	//create side menu
	$('.header-category').click(function(){
		$('.menu-mobile-overlay').show()
		$('.mobile-main-menu-wrap').show()
	});
	
	$('.side-to-left').click(function (e) { 
		$('.menu-mobile-overlay').hide()
		$('.mobile-main-menu-wrap').hide()
		//if accordion still open => close those
		$('.accordion-list').hide()
		$('.minus').hide()
		$('.plus').show()
		$('.accordion-list1').hide()
		$('.minus1').hide()
		$('.plus1').show()
	})


	// menu-mobile-overlay and mobile-main-menu
	$(window).resize(function() {
		var viewportWidth = $(window).width()
		if (viewportWidth > 739){
			$('.menu-mobile-overlay').hide()
		}
		else if($('.mobile-main-menu-wrap').css('display') == 'block'){
			$('.menu-mobile-overlay').show()
		}
	})
	$('.header-mobile-search').click(function(){
		$('.header-with-search').toggleClass('search-display')
	})

	// accordion
	// Cakes
	$('.plus').on('click', function(){
		$('.accordion-list').slideDown(500, function(){
			$('.accordion-list').show()
		})
		$('.plus').hide()
		$('.minus').show()
	})
	$('.minus').click(function(){
		$('.accordion-list').slideUp(500, function(){
			$('.accordion-list').hide()
		})
		$('.minus').hide()
		$('.plus').show()
	})

	// drinks
	$('.plus1').click(function(){
		$('.accordion-list1').slideDown(500, function(){
			$('.accordion-list1').show();
		})
		$('.plus1').hide()
		$('.minus1').show()
	})
	$('.minus1').click(function(){
		$('.accordion-list1').slideUp(500, function(){
			$('.accordion-list1').hide()
		})
		$('.minus1').hide()
		$('.plus1').show()
	})


	// auth-form
	$('#account').click(function(){
		$('.modal').css('display', 'flex')
	})
	$('.close-it').click(function(){
		$('.modal').hide()
	})
	$('.btn-sign-up').hover(function () {
		// over
		$(this).css('background-color', '#b5bd0a')
	})

	//===========PRODUCT PAGE==========
	//data of product
	const product1 = [
		{id: 1, image: "img/Gateaux/1.jpg" ,title:'GREEN TEA CAKE 3', code:'GK001', price: '250.000đ'},
		{id: 2, image: "img/Gateaux/2.jpg" ,title:'TIRAMISU', code:'GK002', price: '240.000đ'},
		{id: 3, image: "img/Gateaux/3.jpg" ,title:'GREEN CAKE LOVE', code:'GK003', price: '230.000đ'},
		{id: 4, image: "img/Gateaux/4.jpg" ,title:'TIRAMISU XÙ', code:'GK004', price: '220.000đ'},
		{id: 5, image: "img/Gateaux/5.jpg" ,title:'CAPUCCINO', code:'GK005', price: '260.000đ'},
		{id: 6, image: "img/Gateaux/6.jpg" ,title:'CHOCOLATE FRESH CREAM CAKE', code:'GK006', price: '230.000đ'},
		{id: 7, image: "img/Gateaux/7.jpg" ,title:'COCONUT CAKE', code:'GK007', price: '230.000đ'},
		{id: 8, image: "img/Gateaux/8.jpg" ,title:'DARK CHOCOLATE CREAM CAKE', code:'GK008', price: '260.000đ'},
		{id: 9, image: "img/Gateaux/9.jpg" ,title:'RED VELVET CAKE 1', code:'GK009', price: '220.000đ'},
		{id: 10, image: "img/Gateaux/10.jpg" ,title:'RED VELVET CAKE 2', code:'GK010', price:'220.000đ'},
		{id: 11, image: "img/Gateaux/11.jpg" ,title:'RED VELVET VUÔNG', code:'GK011', price: '220.000đ'},
		{id: 12, image: "img/Gateaux/12.jpg" ,title:'MOIST CHOCOLATE CAKE', code:'GK012', price: '240.000đ'},
		{id: 13, image: "img/Gateaux/13.jpg" ,title:'FRUIT CAKE 2', code:'GK013', price: '270.000đ'},
		{id: 14, image: "img/Gateaux/14.jpg" ,title:'FRUIT CAKE', code:'GK014', price: '260.000đ'},
		{id: 15, image: "img/Gateaux/15.jpg" ,title:'GREEN TEA CAKE 2', code:'GK015', price: '260.000đ'},
		{id: 16, image: "img/Gateaux/16.jpg" ,title:'MOIST CHOCOLATE CAKE 2', code:'GK016', price: '240.000đ'},
		{id: 17, image: "img/Gateaux/17.jpg" ,title:'RED VELVET CAKE 3', code:'GK017', price: '230.000đ'},
		{id: 18, image: "img/Gateaux/18.jpg" ,title:'CARAMEL MOIST CAKE', code:'GK018', price: '230.000đ'},
		{id: 19, image: "img/Gateaux/19.jpg" ,title:'RED VELVET CAKE 3', code:'GK019', price: '230.000đ'},
		{id: 20, image: "img/Gateaux/20.jpg" ,title:'TIRAMISU CAKE', code:'GK020', price: '220.000đ'},
		{id: 21, image: "img/Gateaux/21.jpg" ,title:'TIRAMISU VUÔNG', code:'GK021', price: '220.000đ'},
		{id: 22, image: "img/Gateaux/22.jpg" ,title:'DELI CAKE 2', code:'GK022', price: '220.000đ'},
		{id: 23, image: "img/Gateaux/23.jpg" ,title:'BLUEBERRY CAKE', code:'GK023', price: '240.000đ'},
		{id: 24, image: "img/Gateaux/24.jpg" ,title:'FRESH FRUIT CAKE', code:'GK024', price: '250.000đ'},
		{id: 25, image: "img/Gateaux/25.jpg" ,title:'TIRAMISU FOUR LOVE', code:'GK025', price: '260.000đ'},
		{id: 26, image: "img/Gateaux/26.jpg" ,title:'MOIST CHOCOLATE FOUR LOVE', code:'GK026', price: '220.000đ'},
		{id: 27, image: "img/Gateaux/27.jpg" ,title:'GREEN TEA FOUR LOVE', code:'GK027', price: '240.000đ'},
		{id: 28, image: "img/Gateaux/28.jpg" ,title:'RED VELVET FOUR LOVE', code:'GK028', price: '250.000đ'},
		{id: 29, image: "img/Gateaux/29.jpg" ,title:'STRAWBERRY CAKE', code:'GK029', price: '260.000đ'},
		{id: 30, image: "img/Gateaux/30.jpg" ,title:'FRESH CREAM CAKE 2', code:'GK030', price: '260.000đ'},
		{id: 31, image: "img/Gateaux/31.jpg" ,title:'CAPUCCINO CHỮ NHẬT', code:'GK031', price: '280.000đ'},
		{id: 32, image: "img/Gateaux/32.jpg" ,title:'BLUEBERRY FRESH CREAM CAKE', code:'GK032', price: '300.000đ'},
		{id: 33, image: "img/Gateaux/33.jpg" ,title:'TIRAMISU CHỮ NHẬT', code:'GK033', price: '300.000đ'},
		{id: 34, image: "img/Gateaux/34.jpg" ,title:'FRESH FRUIT CREAM CAKE', code:'GK034', price: '260.000đ'},
		{id: 35, image: "img/Gateaux/35.jpg" ,title:'STRAWBERRY HEART CAKE', code:'GK035', price: '240.000đ'},
		{id: 36, image: "img/Gateaux/36.jpg" ,title:'CHOCOLATE HEART CAKE', code:'GK036', price: '230.000đ'},
		{id: 37, image: "img/Gateaux/37.jpg" ,title:'DELI HEART CAKE', code:'GK037', price: '260.000đ'},
		{id: 38, image: "img/Gateaux/38.jpg" ,title:'CHOCOLATE TIRAMISU CHỮ NHẬT', code:'GK038', price: '260.000đ'},
		{id: 39, image: "img/Gateaux/39.jpg" ,title:'GREEN TEA CAKE CHỮ NHẬT', code:'GK039', price: '230.000đ'},
		{id: 40, image: "img/Gateaux/40.jpg" ,title:'WHITE CHOCOLATE SPRING CAKE', code:'GK040', price: '230.000đ'},
		{id: 41, image: "img/Gateaux/41.jpg" ,title:'FRUIT CAKE CHỮ NHẬT', code:'GK041', price: '230.000đ'}
	]
	const product2 = [
		{id: 1, image: "img/GateauxCream/1.jpg" ,title:'DARK CHOCOLATE CAKE', code:'GC001', price: '230.000đ'},
		{id: 2, image: "img/GateauxCream/2.jpg" ,title:'WHITE CHOCOLATE AND COCONUT CAKE', code:'GC002', price: '240.000đ'},
		{id: 3, image: "img/GateauxCream/3.jpg" ,title:'MOKA CAKE', code:'GC003', price: '230.000đ'},
		{id: 4, image: "img/GateauxCream/4.jpg" ,title:'WHITE CHOCOLATE CAKE', code:'GC004', price: '220.000đ'},
		{id: 5, image: "img/GateauxCream/5.jpg" ,title:'DARK CHOCOLATE COCONUT', code:'GC005', price: '260.000đ'},
		{id: 6, image: "img/GateauxCream/6.jpg" ,title:'DARK CHOCOLATE CAKE', code:'GC006', price: '230.000đ'},
		{id: 7, image: "img/GateauxCream/7.jpg" ,title:'OPERA VUÔNG', code:'GC007', price: '230.000đ'},
		{id: 8, image: "img/GateauxCream/8.jpg" ,title:'PRALINE 2', code:'GC008', price: '260.000đ'}
	]
	const product3 = [
		{id: 1, image: "img/MousseCake/1.jpg" ,title:'BLUEBERRY MOUSSE', code:'MK001', price: '230.000đ'},
		{id: 2, image: "img/MousseCake/2.jpg" ,title:'CHERRY CHEESE MOUSSE', code:'MK002', price: '240.000đ'},
		{id: 3, image: "img/MousseCake/3.jpg" ,title:'SAVEURS CHOCOLATE MOUSSE', code:'MK003', price: '230.000đ'},
		{id: 4, image: "img/MousseCake/4.jpg" ,title:'CARAMEL CHOCOLATE MOUSSE', code:'MK004', price: '220.000đ'},
		{id: 5, image: "img/MousseCake/5.jpg" ,title:'RASPBERRY CREAM CHESSE MOUSSE', code:'MK005', price: '260.000đ'},
		{id: 6, image: "img/MousseCake/6.jpg" ,title:'PASSION MOUSSE CHANH LEO', code:'MK006', price: '230.000đ'},
		{id: 7, image: "img/MousseCake/7.jpg" ,title:'HAWAI MOUSSE', code:'MK007', price: '230.000đ'}
	]
	const product4 = [
		{id: 1, image: "img/birthdayCake/1.png" ,title:'BÁNH SỰ KIỆN',price: 'Liên hệ', code:'SK001'},
		{id: 2, image: "img/birthdayCake/2.png" ,title:'BÁNH SỰ KIỆN',price: 'Liên hệ', code:'SK028' },
		{id: 3, image: "img/birthdayCake/3.png" ,title:'BÁNH SỰ KIỆN',price: 'Liên hệ', code:'SK002' },
		{id: 4, image: "img/birthdayCake/4.png" ,title:'BÁNH SỰ KIỆN',price: 'Liên hệ', code:'SK029' },
		{id: 5, image: "img/birthdayCake/5.png" ,title:'BÁNH SỰ KIỆN',price: 'Liên hệ', code:'SK038'},
		{id: 6, image: "img/birthdayCake/6.png" ,title:'BÁNH SỰ KIỆN',price: 'Liên hệ', code:'SK113'},
		{id: 7, image: "img/birthdayCake/7.png" ,title:'BÁNH SỰ KIỆN',price: 'Liên hệ', code:'SK135' },
		{id: 8, image: "img/birthdayCake/8.png" ,title:'BÁNH SỰ KIỆN',price: 'Liên hệ', code:'SK081' },
		{id: 9, image: "img/birthdayCake/9.jpg" ,title:'BÁNH IN ẢNH', price: 'Liên hệ',code:'BA012' },
		{id: 10, image: "img/birthdayCake/10.jpg", title:'BÁNH IN ẢNH', price: 'Liên hệ',code:'BA014' },
		{id: 11, image: "img/birthdayCake/11.jpg", title:'BÁNH IN ẢNH', price: 'Liên hệ',code:'BA018' },
		{id: 12, image: "img/birthdayCake/12.jpg", title:'BÁNH IN ẢNH', price: 'Liên hệ',code:'BA007' },
		{id: 13, image: "img/birthdayCake/13.jpg", title:'BÁNH IN ẢNH', price: 'Liên hệ',code:'BA012' },
		{id: 14, image: "img/birthdayCake/14.jpg", title:'BÁNH IN ẢNH', price: 'Liên hệ',code:'BA112' },
		{id: 15, image: "img/birthdayCake/15.jpg", title:'BÁNH IN ẢNH', price: 'Liên hệ',code:'BA016' },
		{id: 16, image: "img/birthdayCake/16.jpg", title:'BÁNH IN ẢNH', price: 'Liên hệ',code:'BA289' },
		{id: 17, image: "img/birthdayCake/17.jpg", title:'BÁNH IN ẢNH', price: 'Liên hệ',code:'BA256' },
		{id: 18, image: "img/birthdayCake/18.jpg", title:'BÁNH IN ẢNH', price: 'Liên hệ',code:'BA126' },
		{id: 19, image: "img/birthdayCake/19.jpg", title:'BÁNH IN ẢNH', price: 'Liên hệ',code:'BA011' },
		{id: 20, image: "img/birthdayCake/20.jpg", title:'BÁNH IN ẢNH', price: 'Liên hệ',code:'BA501' },
		{id: 21, image: "img/birthdayCake/21.png", title:'BÁNH IN ẢNH', price: 'Liên hệ',code:'BA003' },
		{id: 22, image: "img/birthdayCake/22.png", title:'BÁNH IN ẢNH', price: 'Liên hệ',code:'BA071' },
		{id: 23, image: "img/birthdayCake/23.jpg", title:'BÁNH IN ẢNH', price: 'Liên hệ',code:'BA100' },
		
	]
	const product5 = [
		{id: 1, image: "img/BanhMan/1.jpg" ,title:'PAIN CHOCOLATE', code:'BM001', price: '17.000đ'},
		{id: 2, image: "img/BanhMan/2.jpg" ,title:'BÁNH NHO KHOAI', code:'BM002', price: '17.000đ'},
		{id: 3, image: "img/BanhMan/3.jpg" ,title:'BÁNH NGÀN LỚP TÁO - PUFF PASTRY APPLE PIES', code:'BM003', price: '14.000đ'},
		{id: 4, image: "img/BanhMan/4.jpg" ,title:'BÁNH XÚC XÍCH HOA', code:'BM004', price: '22.000đ'},
		{id: 5, image: "img/BanhMan/5.jpg" ,title:'JAMBONG', code:'BM005', price: '22.000đ'},
		{id: 6, image: "img/BanhMan/6.jpg" ,title:'PATESO MINI', code:'BM006', price: '7.000đ'},
		{id: 7, image: "img/BanhMan/7.jpg" ,title:'CHOCOLATE DONUT- BÁNH VÒNG SOCOLA', code:'BM007', price: '12.000đ'},
		{id: 8, image: "img/BanhMan/8.jpg" ,title:'BÁNH NHÂN NHO - CLASSIC FRENCH PAIN AUX RAISIN', code:'BM008', price: '14.000đ'},
		{id: 9, image: "img/BanhMan/9.jpg" ,title:'NGÀN LỚP VIỆT QUẤT - BLUEBERRY PUFF PASTRY PIES', code:'BM009', price: '14.000đ'},
		{id: 10, image: "img/BanhMan/10.jpg" ,title:'SỪNG BÒ - CROISSANT', code:'BM0010', price: '14.000đ'},
		{id: 11, image: "img/BanhMan/11.jpg" ,title:'BÁNH MÌ GỐI', code:'BM011', price: '14.000đ'},
		{id: 12, image: "img/BanhMan/12.jpg" ,title:'BÁNH MÌ VỪNG', code:'BM012', price: '10.000đ'},
		{id: 13, image: "img/BanhMan/13.jpg" ,title:'BÁNH MÌ HOA CÚC', code:'BM013', price: '60.000đ'},
		{id: 14, image: "img/BanhMan/14.jpg" ,title:'BÁNH MÌ ĐEN - FRENCH RYE BREAD', code:'BM014', price: '18.000đ'},
		{id: 15, image: "img/BanhMan/15.jpg" ,title:'BÁNH MÌ CHUỘT', code:'BM015', price: '2.000đ'},
		{id: 16, image: "img/BanhMan/16.jpg" ,title:'BÁNH MÌ BAGUETTE', code:'BM016', price: '9.000đ'}
	]
	const product6 = [
		{id: 1, image: "img/BanhMan/t1.jpg" ,title:'PAIN CHOCOLATE', code:'TB001', price: '17.000đ'},
		{id: 2, image: "img/BanhMan/t2.jpg" ,title:'LIGHT CHEESE NHẬT', code:'TB002', price: '22.000đ'},
		{id: 3, image: "img/BanhMan/t3.jpg" ,title:'LIGHT CHEESE CAKE', code:'TB003', price: '80.000đ'},
		{id: 4, image: "img/BanhMan/t4.jpg" ,title:'GATO TRỨNG MUỐI', code:'TB004', price: '130.000đ'},
		{id: 5, image: "img/BanhMan/t5.jpg" ,title:'GATO CUỘN VANI', code:'TB005', price: '60.000đ'},
		{id: 6, image: "img/BanhMan/t6.jpg" ,title:'PETIT MOKA', code:'TB006', price: '55.000đ'},
		{id: 7, image: "img/BanhMan/t7.jpg" ,title:'PETIT OPERA', code:'TB007', price: '12.000đ'},
		{id: 8, image: "img/BanhMan/t8.jpg" ,title:'PETIT MOUSSE CHANH LEO', code:'TB008', price: '75.000đ'},
		{id: 9, image: "img/BanhMan/t9.jpg" ,title:'PETIT HAWAI/ CARAMEL DỪA', code:'TB009', price: '75.000đ'},
		{id: 10, image: "img/BanhMan/t10.jpg" ,title:'RED VELVEL CAKE PIECE', code:'TB0010', price: '35.000đ'},
		{id: 11, image: "img/BanhMan/t11.jpg" ,title:'OPERA CAKE PIECE', code:'TB011', price: '35.000đ'},
		{id: 12, image: "img/BanhMan/t12.jpg" ,title:'MOKA CAKE PIECE', code:'TB012', price: '37.000đ'},
		{id: 13, image: "img/BanhMan/t13.jpg" ,title:'CAPUCHINO CAKE PIECE', code:'TB013', price: '35.000đ'},
		{id: 14, image: "img/BanhMan/t14.jpg" ,title:'TIRAMISU CAKE PIECE', code:'TB014', price: '35.000đ'},
		{id: 15, image: "img/BanhMan/t15.jpg" ,title:'TRÀ XANH CAKE PIECE', code:'TB015', price: '35.000đ'},
		{id: 16, image: "img/BanhMan/t16.jpg" ,title:'CUPCAKE SOCOLA', code:'TB016', price: '16.000đ'},
		{id: 17, image: "img/BanhMan/t17.jpg" ,title:'CUPCAKE TRÀ XANH', code:'TB017', price: '16.000đ'},
		{id: 18, image: "img/BanhMan/t18.jpg" ,title:'CUPCAKE VANI', code:'TB018', price: '16.000đ'}
	]
	const drink1 = [
		{id: 1, image: "img/drinks/t1.jpg" ,title:'TRÀ CHANH', code:'TR001', price: '40.000đ'},
		{id: 2, image: "img/drinks/t2.jpg" ,title:'TRÀ VẢI', code:'TR002', price: '40.000đ'},
		{id: 3, image: "img/drinks/t3.jpg" ,title:'TRÀ ĐÀO', code:'TR003', price: '40.000đ'},
		{id: 4, image: "img/drinks/t4.jpg" ,title:'HỒNG TRÀ MACCHIATO', code:'TR004', price: '40.000đ'},
		{id: 5, image: "img/drinks/t5.jpg" ,title:'TRÀ ĐÀO CAM DÂU', code:'TR005', price: '40.000đ'},
		{id: 6, image: "img/drinks/t6.jpg" ,title:'LỤC TRÀ MACCHIATO', code:'TR006', price: '40.000đ'},
		{id: 7, image: "img/drinks/t7.jpg" ,title:'TRÀ ĐÀO CAM SẢ', code:'TR007', price: '40.000đ'},
		{id: 8, image: "img/drinks/t8.jpg" ,title:'HỒNG TRÀ', code:'TR005', price: '40.000đ'},
		{id: 9, image: "img/drinks/t9.jpg" ,title:'LỤC TRÀ', code:'TR006', price: '40.000đ'},
		{id: 10, image: "img/drinks/t10.jpg" ,title:'TRÀ MATCHA MACCHIATO', code:'TR007', price: '40.000đ'},
		{id: 11, image: "img/drinks/t11.jpg" ,title:'TRÀ PHÚC BỒN TỬ', code:'TR007', price: '40.000đ'}
	]
	const drink2 = [
		{id: 1, image: "img/drinks/s1.jpg" ,title:'SODA CHANH LEO', code:'SD001', price: '45.000đ'},
		{id: 2, image: "img/drinks/s2.jpg" ,title:'BENGIN BLUEBERRY LEMONADE', code:'SD002', price: '45.000đ'},
		{id: 3, image: "img/drinks/s3.jpg" ,title:'LEMON SODA', code:'SD003', price: '45.000đ'},
		{id: 4, image: "img/drinks/s4.jpg" ,title:'SODA CHANH', code:'SD004', price: '45.000đ'},
		{id: 5, image: "img/drinks/s5.jpg" ,title:'PASSION SODA', code:'SD005', price: '45.000đ'},
		{id: 6, image: "img/drinks/s6.jpg" ,title:'SODA DÂU', code:'SD006', price: '45.000đ'},
		{id: 7, image: "img/drinks/s7.jpg" ,title:'SODA CHANH HOA ĐẬU BIẾC', code:'SD007', price: '45.000đ'}
	]
	const drink3 = [
		{id: 1, image: "img/drinks/n1.jpg" ,title:'NƯỚC ÉP ĐÀO', code:'NE001', price: '35.000đ'},
		{id: 2, image: "img/drinks/n2.jpg" ,title:'NƯỚC ÉP CÀ CHUA', code:'NE002', price: '35.000đ'},
		{id: 3, image: "img/drinks/n3.jpg" ,title:'NƯỚC ÉP DƯA LEO', code:'NE003', price: '35.000đ'},
		{id: 4, image: "img/drinks/n4.jpg" ,title:'NƯỚC ÉP RAU MÁ', code:'NE004', price: '35.000đ'},
		{id: 5, image: "img/drinks/n5.jpg" ,title:'NƯỚC ÉP CÀ RỐT', code:'NE005', price: '35.000đ'},
		{id: 6, image: "img/drinks/n6.jpg" ,title:'NƯỚC ÉP KHÓM', code:'NE006', price: '35.000đ'},
		{id: 7, image: "img/drinks/n7.jpg" ,title:'NƯỚC ÉP XOÀI', code:'NE007', price: '35.000đ'},
		{id: 8, image: "img/drinks/n8.jpg" ,title:'NƯỚC ÉP CAM', code:'NE008', price: '35.000đ'},
		{id: 9, image: "img/drinks/n9.jpg" ,title:'NƯỚC ÉP MÂM XÔI ĐEN', code:'NE009', price: '35.000đ'},
		{id: 10, image: "img/drinks/n10.jpg" ,title:'NƯỚC DỪA', code:'NE0010', price: '35.000đ'}
	]
	const drink5 = [
		{id: 1, image: "img/drinks/c1.jpg" ,title:'CÀ PHÊ SỮA MATCHA', code:'CF001', price: '30.000đ'},
		{id: 2, image: "img/drinks/c2.jpg" ,title:'CAPPUCCINO', code:'CF002', price: '30.000đ'},
		{id: 3, image: "img/drinks/c3.jpg" ,title:'CÀ PHÊ ĐÁ VANILLA', code:'CF003', price: '30.000đ'},
		{id: 4, image: "img/drinks/c4.jpg" ,title:'CÀ PHÊ SỮA TƯƠI', code:'CF004', price: '30.000đ'},
		{id: 5, image: "img/drinks/c5.jpg" ,title:'CÀ PHÊ MATCHA LATTE', code:'CF005', price: '30.000đ'},
		{id: 6, image: "img/drinks/c6.jpg" ,title:'CÀ PHÊ CỐT DỪA', code:'CF006', price: '30.000đ'},
		{id: 7, image: "img/drinks/c7.jpg" ,title:'CÀ PHÊ LATTE', code:'CF007', price: '30.000đ'},
		{id: 8, image: "img/drinks/c8.jpg" ,title:'CÀ PHÊ SỦI BỌT', code:'CF008', price: '30.000đ'},
		{id: 9, image: "img/drinks/c9.jpg" ,title:'CÀ PHÊ TRỨNG', code:'CF009', price: '30.000đ'}
	]

	//danh mục trong product.html
	$('.product-category-item').click(function() {
		let text = $(this).text()
		$('.product-title-text').text(text)
		$('.product-layout-title-text').text(text)
	})
	//thanh category trên PC
	$('.dropdown-item').click(function() {
		let text = $(this).text()
		$('.product-title-text').text(text)
		$('.product-layout-title-text').text(text)
	})
	//thanh category bên mobile
	$('.accordion-item').click(function() {
		let text = $(this).text()
		$('.product-title-text').text(text)
		$('.product-layout-title-text').text(text)
	});


	// ẩn thanh category bên mobile khi click on page product.html
	$('.hide-aside-menu-onclick').click(function () {
		$('.mobile-main-menu-wrap').hide()
		$('.menu-mobile-overlay').hide()

		if ($('.plus').hide()){
			$('.accordion-list').hide()
			$('.minus').hide()
			$('.plus').show()
		}
		if ($('.plus1').hide()){
			$('.accordion-list1').hide()
			$('.minus1').hide()
			$('.plus1').show()
		}
		
	})



	let perPage = 9
	let start = 0
	let end = perPage
	let totalPages
	function renderNumPage(totalPages){
		let html = ''
		if (totalPages != 1){
			html += `<li class="pagination-item pagination-item--active"><a href="#" class="pagination-item-link">${1}</a></li>`
			for (let i = 2; i <= totalPages; i++){
				html += `<li class="pagination-item"><a href="#" class="pagination-item-link">${i}</a></li>`
			}
		}
		$('.number-page').html(html)
	}
	function getCurrentPage(currentPg){
		start = (currentPg - 1) * perPage
		end = currentPg * perPage
	}
	function renderProduct(pro){
		let html = ''
		const content = pro.map((item, index) => {
			if (index >= start && index < end){
				html += `<div class="col l-4 m-4 c-6">
						<div class="item__filter">
							<div class="item__filter-img">
								<a class="link-img" href="detail.html"><img src= ${item.image}></a>
							</div>
							<div class="item__filter-info">
								<div class="item__filter-heading-title">
									<a href="detail.html" class="item__filter-heading-title-text">${item.title}</a>
									<p class="item__filter-heading-title-code">${item.code}</p>
								</div>
								<div class="item__filter-price-action">
									<div class="item__filter-price">${item.price}</div>
									<button class="item__filter-cart-buy"><i class="fas fa-shopping-cart"></i></button>
								</div>
							</div>
						</div>
					</div>`
			}
			$('#product').html(html)
		});
	}
	function changePage(product1){
		const currentPages = $('.number-page .pagination-item')
		for (let i = 0; i < currentPages.length; i++){
			$(currentPages[i]).click(function (event){
				event.preventDefault()
				const current = $('.pagination-item--active')
				let val  = i + 1
				$(current[0]).removeClass('pagination-item--active')
				$(this).addClass('pagination-item--active')
				currentPage = val
				getCurrentPage(currentPage)
				renderProduct(product1)
			})
		}
	}

	let currentPage = 1
	start = 0
	end = perPage
	totalPages = Math.ceil(product1.length / perPage)
	renderNumPage(totalPages)
	changePage(product1)
	renderProduct(product1)
	
	// Bấm bên trên thanh category
	$('.cake1').click(() => {
		let currentPage = 1;
		start = 0;
		end = perPage;
		// btnNext.removeClass('btn-active');
		totalPages = Math.ceil(product1.length / perPage);
		renderNumPage(totalPages);
		changePage(product1);
		renderProduct(product1);
	})
	$('.cake2').click(() => {
		
		let currentPage = 1;
		start = 0;
		end = perPage;
		// btnNext.removeClass('btn-active');
		totalPages = Math.ceil(product2.length / perPage);
		renderNumPage(totalPages);
		changePage(product2);
		renderProduct(product2);
	})
	$('.cake3').click(() => {
		
		let currentPage = 1;
		start = 0;
		end = perPage;
		// btnNext.removeClass('btn-active');
		totalPages = Math.ceil(product3.length / perPage);
		renderNumPage(totalPages);
		changePage(product3);
		renderProduct(product3);
	})
	$('.cake4').click(() => {
		
		let currentPage = 1;
		start = 0;
		end = perPage;
		// btnNext.removeClass('btn-active');
		totalPages = Math.ceil(product4.length / perPage);
		renderNumPage(totalPages);
		changePage(product4);
		renderProduct(product4);
	})
	$('.cake5').click(() => {
		
		let currentPage = 1;
		start = 0;
		end = perPage;
		// btnNext.removeClass('btn-active');
		totalPages = Math.ceil(product5.length / perPage);
		renderNumPage(totalPages);
		changePage(product5);
		renderProduct(product5);
	})
	$('.cake6').click(() => {
		
		let currentPage = 1;
		start = 0;
		end = perPage;
		// btnNext.removeClass('btn-active');
		totalPages = Math.ceil(product6.length / perPage);
		renderNumPage(totalPages);
		changePage(product6);
		renderProduct(product6);
	})
	$('.drink1').click(() => {
		
		let currentPage = 1;
		start = 0;
		end = perPage;
		// btnNext.removeClass('btn-active');
		totalPages = Math.ceil(drink1.length / perPage);
		renderNumPage(totalPages);
		changePage(drink1);
		renderProduct(drink1);
	})
	$('.drink2').click(() => {
		
		let currentPg = 1;
		start = 0;
		end = perPage;
		//btnNext.removeClass('btn-active');
		totalPages = Math.ceil(drink2.length / perPage);
		renderNumPage(totalPages);
		changePage(drink2);
		renderProduct(drink2);
	})
	$('.drink3').click(() => {
		
		let currentPage = 1;
		start = 0;
		end = perPage;
		// btnNext.removeClass('btn-active');
		totalPages = Math.ceil(drink3.length / perPage);
		renderNumPage(totalPages);
		changePage(drink3);
		renderProduct(drink3);
	})
	$('.drink5').click(() => {
		
		let currentPage = 1;
		start = 0;
		end = perPage;
		// btnNext.removeClass('btn-active');
		totalPages = Math.ceil(drink5.length / perPage);
		renderNumPage(totalPages);
		changePage(drink5);
		renderProduct(drink5);
	})
	// Bấm bên dưới danh mục sản phẩm
	//danh sách sản phẩm <li>1
	$('#cake1').click((event) =>{
		event.preventDefault()
		//reset lại khi chọn trang khác
		let currentPage = 1;
		start = 0;
		end = perPage;
		// btnNext.removeClass('btn-active');
		totalPages = Math.ceil(product1.length / perPage);
		renderNumPage(totalPages);
		changePage(product1);
		renderProduct(product1);
		//btn-next product list
		// btnNext.click(() => {
		// 	currentPage++;
		// 	console.log("cake 1",currentPage,totalPages );
		// 	if (currentPage > totalPages){
		// 		currentPage = totalPages;
		// 	}
		// 	if (currentPage === totalPages){
		// 		console.log("cake 1 max",currentPage,totalPages );
		// 		btnNext.addClass('btn-active');
		// 	}
		// 	btnPrev.removeClass('btn-active');	
		// 	$('.number-page .pagination-item').removeClass('pagination-item--active');
		// 	$(`.number-page .pagination-item:eq(${currentPage - 1})`).addClass('pagination-item--active');
		// 	getCurrentPage1(currentPage);
		// 	renderProduct1();
		// });
		// // btn-prev product list
		// btnPrev.click(() => {
		// 	currentPage--;
		// 	if (currentPage <= 0)
		// 	{
		// 		currentPage = 1;
		// 	}
		// 	if (currentPage === 1) {
		// 		btnPrev.addClass('btn-active');
		// 	}
		// 	btnNext.removeClass('btn-active');
		// 	$('.number-page .pagination-item').removeClass('pagination-item--active');
		// 	$(`.number-page .pagination-item:eq(${currentPage - 1})`).addClass('pagination-item--active');
		// 	getCurrentPage1(currentPage);
		// 	renderProduct1();
		// });
		
	})
	$('#cake2').click((event) =>{
		event.preventDefault()
		//reset lại khi chọn trang khác
		let currentPg = 1;
		start = 0;
		end = perPage;
		//btnNext.removeClass('btn-active');
		totalPages = Math.ceil(product2.length / perPage);
		renderNumPage(totalPages);
		changePage(product2);
		renderProduct(product2);
		
	})
	$('#cake3').click((event) =>{
		event.preventDefault()
		//reset lại khi chọn trang khác
		let currentPg = 1;
		start = 0;
		end = perPage;
		//btnNext.removeClass('btn-active');
		totalPages = Math.ceil(product3.length / perPage);
		renderNumPage(totalPages);
		changePage(product3);
		renderProduct(product3);
	})
	$('#cake4').click((event) =>{
		event.preventDefault()
		//reset lại khi chọn trang khác
		//btnNext.removeClass('btn-active');
		let currentPage = 1;
		start = 0;
		end = perPage;

		totalPages = Math.ceil(product4.length / perPage);
		renderNumPage(totalPages);
		changePage(product4);
		renderProduct(product4);
	})
	$('#cake5').click((event) => {
		event.preventDefault()
		let currentPage = 1;
		start = 0;
		end = perPage;
		// btnNext.removeClass('btn-active');
		totalPages = Math.ceil(product5.length / perPage);
		renderNumPage(totalPages);
		changePage(product5);
		renderProduct(product5);
	})
	$('#cake6').click((event) => {
		event.preventDefault()
		let currentPage = 1;
		start = 0;
		end = perPage;
		// btnNext.removeClass('btn-active');
		totalPages = Math.ceil(product6.length / perPage);
		renderNumPage(totalPages);
		changePage(product6);
		renderProduct(product6);
	})
	//đồ uống
	$('#drink1').click((event) =>{
		event.preventDefault()
		//reset lại khi chọn trang khác
		let currentPg = 1;
		start = 0;
		end = perPage;
		//btnNext.removeClass('btn-active');
		totalPages = Math.ceil(drink1.length / perPage);
		renderNumPage(totalPages);
		changePage(drink1);
		renderProduct(drink1);
	})
	$('#drink2').click((event) =>{
		event.preventDefault()
		//reset lại khi chọn trang khác
		let currentPg = 1;
		start = 0;
		end = perPage;
		//btnNext.removeClass('btn-active');
		totalPages = Math.ceil(drink2.length / perPage);
		renderNumPage(totalPages);
		changePage(drink2);
		renderProduct(drink2);
	})
	$('#drink3').click((event) =>{
		event.preventDefault()
		//reset lại khi chọn trang khác
		let currentPg = 1;
		start = 0;
		end = perPage;
		//btnNext.removeClass('btn-active');
		totalPages = Math.ceil(drink3.length / perPage);
		renderNumPage(totalPages);
		changePage(drink3);
		renderProduct(drink3);
	})
	$('#drink5').click((event) =>{
		event.preventDefault()
		//reset lại khi chọn trang khác
		let currentPg = 1;
		start = 0;
		end = perPage;
		//btnNext.removeClass('btn-active');
		totalPages = Math.ceil(drink5.length / perPage);
		renderNumPage(totalPages);
		changePage(drink5);
		renderProduct(drink5);
	})

	// ====================PRODUCT DETAIL==========

	const imgDetail = $('.product-img img')
	$('.product-item').click(function(event) {
		var imgChange = $(this).children('.product-item_img').children('img').attr('src')
		imgDetail.attr('src', imgChange)
		
		var text = $(this).children('.product-item_name').children('a').text()
		var codeProduct = $(this).children('.product-item_name').children('p').text()
		var price = $(this).children('.product-price_action').children('.product-price').text()
		$('.product-detail--title h3').text(text)
		$('.product-detail--code').text(codeProduct)
		$('.product-detail--price').text(price + '/')
		$('.product-title-text').text(text)
	})
	
	const items = [{
		title: 'CARAMEL AND CHOCOLATE CAKE MOUSSE VUÔNG', 
		code: 'CM003', 
		price: 220000, 
		quantity: 1
	}]

	function updateQuantity(index, quantity){
		if (quantity < 1){
			return
		}
		items[index].quantity = quantity
		render()
	}

	function render(){
		let total = 0
		items.forEach(item => {
			total = item.quantity * item.price
		});
		$('#total').text(`${total}đ`)

		const html = items.map(item => `
			<div class="product-detail--title">
				<h3>${item.title}</h3>
				<p>Mã sản phẩm: <span class="product-detail--code">${item.code}</span></p>
			</div>
			<div class="product-detail-book--wrap">
				<div class="product-detail_info-price">
					<span>Giá:</span>
					<span class="product-detail--price">${item.price.toLocaleString('de-DE')}đ/</span>
				</div>
				<div class="product-detail-book">
					<div class="dimension">
						<span>Kích thước:</span><span class="dimen dimension-active">19cm</span><span class="dimen">21cm</span><span class="dimen">25cm</span>
					</div>
					
					<span>Số lượng:</span>
					<span class="quantity-selection">
						<button class="dec">-</button>
						<input type="number" class="quantity" value="${item.quantity}">
						<button class="inc">+</button>
					</span>
					<div class="order-summary">
						<p>Tổng tiền:<span id="total" class="money">${(item.quantity * item.price).toLocaleString('de-DE')}đ</span></p>
					</div>
					<div class="button-buy-product">
						<span><button class="add-to-cart">Thêm vào giỏ</button></span>
						<span><button class="buy-it">Mua ngay</button></span>
					</div>
				</div>
			</div>`).join('')
		$('.product-book-wrap').html(html)



		const increseButton = $('.inc')
		const decreaseButton = $('.dec')
		for (let i = 0; i < increseButton.length; i++){
			decreaseButton.click(() => {
				updateQuantity(i, items[i].quantity - 1) 
			})
			increseButton.click(() => {
				updateQuantity(i, items[i].quantity + 1)
			})
		}

		//chọn kích thước bánh
		const dimension = $('.dimension .dimen')
		for(let i = 0; i < dimension.length; i++){
			$(dimension[i]).click(() => {
				if (!$(dimension[i]).hasClass('dimension-active')){
					$('.dimension .dimen').removeClass('dimension-active')
					$(dimension[i]).addClass('dimension-active')
				}
			})
		}
	}
	render()

	//chuyển từ tab miêu tả chung sang tab bình luận
	$('.button-tab').click(function(event){
		event.preventDefault()
		var idContent = $(this).attr('href')

		$('.button-tab').removeClass('tab-active')
		$('.tab').css('display', 'none')
		$(this).addClass('tab-active')
		$(idContent).css('display', 'block')
	})


	
	// chức năng đăng comment
	const postComment = function() {
		const comments = [
			'Bánh này rất ngon!:)',
			'Bánh vừa đẹp vừa trông ngon nữa:)'
		]
		const postArea = $('.postArea')
		const input = $('.input-area')
		const post = $('.post-comment')

		return {
			add(comment){
				comments.push(comment)
			},
			// delete(index){
			// 	comments.splice(index, 1);
			// },
			render(){
				const html = comments.map((comment) =>
					`<div class="comment">
						${comment}
					</div>`
				).join('')
				postArea.html(html)
				//Nếu cần xóa comment thì use this(<span class="delete" data-index='${index}'>&times</span>)
			},
			//xóa comment
			// handleDelete(event){
			// 	const deleteBtn = event.target.closest('.delete')
			// 	if (deleteBtn){
			// 		const index = $('.delete').data('index')
			// 		this.delete(index)
			// 		this.render()
			// 	}
			// },
			init(){
				var count = comments.length;
				post.click(() => {
					const cmt = input.val()
					
					if (cmt != '')
					{
						this.add(cmt)
						count++;
						$('.count-comments').html(`${count} comments`)
						this.render()
	
						input.val(null)
						input.focus()
					}
				})
				// postArea.click((e) => {
				// 	this.handleDelete(e)
				// }) 
				this.render()
			}
		}
	}()
	postComment.init()


	// -----------POLICY PAGE
	const policies = $('.footer-item a');
	for (let i = 0; i < policies.length; i++){
		$(policies[i]).on('click', (event) => {
			const Class = $(policies[i]).attr('class')// lấy class
			const policyId = $('.policy')
			var text = $(policies[i]).text()

			$('.product-title-text').text(text)// đưa nội dung có trong thẻ lên phần heading-title			
			$(policyId).css('display', 'none')//tất cả thẻ có class policyId -> ẩn
			for (let i = 0; i < policyId.length; i++){
				if (Class === $(policyId[i]).attr('id')){//ktra class === id -> cho hiện
					$(policyId[i]).css('display', 'block') 
				}
			}
		})
	}

	// ấn đăng nhập thì ẩn đăng kí và ngược lại
	$('.login').click(function (event){
		event.preventDefault()
		$('.sign-up-outer').css('display', 'none')
		$('.log-in-outer').css('display', 'block')
	})
	$('.signup').click(function (event){
		event.preventDefault()
		$('.sign-up-outer').css('display', 'block')
		$('.log-in-outer').css('display', 'none')
	})



	//thumbnail slide
	const controls = $(".controls")
	const container = $(".thumbnail-container")
	const allBox = container.children()
	const containerWidth = container.width()
	const margin = 30
	var slideItems = 0//số item đc xuất hiện trong 1 trang
	var totalItems = 0//tổng số item
	var jumpSlideWidth = 0


	// item setup per slide
	responsive = [
		{breakPoint:{width:0,item:2}}, 
		{breakPoint:{width:600,item:3}},
		{breakPoint:{width:1000,item:4}} 
	]
	
	function load(){
		for (let i = 0; i < responsive.length; i++){
			if($(window).innerWidth() > responsive[i].breakPoint.width){
				slideItems = responsive[i].breakPoint.item
			}
		}
		start1()
	}

	function start1(){
		var totalItemsWidth = 0
		for(let i = 0;i < allBox.length;i++){
			// width and margin setup of items
			$(allBox[i]).width(((containerWidth/slideItems) - margin) + "px")
			$(allBox[i]).css('margin', (margin/2)+ "px")//chia margin đều phải trái và trên dưới
			totalItemsWidth += containerWidth/slideItems
			totalItems++
		}
		// thumbnail-container width set up
		container.width( totalItemsWidth + "px")

	
		const allSlides = Math.ceil(totalItems / slideItems)
		const ul = $('.ul-controls')
		let html = ''

		for(let i = 1; i <= allSlides;i++){
			if(i == 1)
				html += `<li id="${i}" class="btn-active">${i}</li>`
			else
				html += `<li id="${i}">${i}</li>`
			
		}
		ul.html(html)

		//when click on numbers slide to next slide
		$('.ul-controls > li').click(function(){
			const ul = controls.children()
			const li = ul.children()
			var active = 0;
	
			for(let i = 0;i < li.length; i++){
				if($(li[i]).hasClass("btn-active")){
					active = i
					$(li[i]).removeClass('btn-active')
				}
			}
			// add active class to current slide
			$(this).addClass("btn-active")
			var numb = ($(this).attr('id') - 1) - active
			jumpSlideWidth += (containerWidth * numb)//tạo bước trượt
			container.css('margin-left', -jumpSlideWidth + "px")
		})
	}
	load()


	// SCROLL EFFECT
	$(window).on('scroll',() => {
		const reveals = $('.reveal')
		const window_height = $(window).height()// chiều cao mà hình
		const window_top_position = $(window).scrollTop()// vị trí scroll top
		const plusHeight = window_height - 60// giảm chiều cao màn hình
		const window_bottom_position = (window_top_position + plusHeight)
		
		$.each(reveals, function() {
			var element = $(this)
			var element_top_position = element.offset().top
			
			//kiểm tra vị trí scroll đã chạm đến vị trí của vật thể
			if (element_top_position <= window_bottom_position) {
				element.addClass('scroll-active')
			} else {
				element.removeClass('scroll-active')
			}
		})
	})
})
