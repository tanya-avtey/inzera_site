

  $('.index-slider__block').slick({
    dots: false,
    infinite: false, 
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<div class="slick-prev slick-arrow"><svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.611558 7.23782L3.81098 10.4853C3.94158 10.6171 4.11825 10.691 4.3024 10.691C4.48655 10.691 4.66322 10.6171 4.79382 10.4853C4.85915 10.4195 4.911 10.3413 4.94639 10.2551C4.98178 10.1688 5 10.0764 5 9.98297C5 9.88957 4.98178 9.79709 4.94639 9.71087C4.911 9.62466 4.85915 9.54641 4.79382 9.48063L1.58742 6.24023C1.52209 6.17446 1.47023 6.0962 1.43484 6.00999C1.39945 5.92377 1.38123 5.8313 1.38123 5.7379C1.38123 5.6445 1.39945 5.55202 1.43484 5.4658C1.47023 5.37959 1.52209 5.30133 1.58742 5.23556L4.79382 1.99516C4.92507 1.86287 4.99918 1.68307 4.99983 1.49533C5.00048 1.30758 4.92763 1.12725 4.7973 0.994027C4.66697 0.8608 4.48984 0.785581 4.30486 0.784917C4.11989 0.784253 3.94224 0.858201 3.81098 0.99049L0.611558 4.23797C0.219959 4.63595 0 5.17542 0 5.7379C0 6.30037 0.219959 6.83984 0.611558 7.23782Z" fill="white"/></svg></div>',
    nextArrow: '<div class="slick-next slick-arrow"><svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.38844 3.76218L1.18902 0.514699C1.05842 0.382924 0.881748 0.30896 0.697599 0.30896C0.513451 0.30896 0.336784 0.382924 0.206184 0.514699C0.140851 0.580472 0.0889955 0.658723 0.0536076 0.74494C0.0182196 0.831157 0 0.923633 0 1.01703C0 1.11043 0.0182196 1.20291 0.0536076 1.28913C0.0889955 1.37534 0.140851 1.45359 0.206184 1.51937L3.41258 4.75977C3.47791 4.82554 3.52977 4.9038 3.56516 4.99001C3.60055 5.07623 3.61877 5.1687 3.61877 5.2621C3.61877 5.3555 3.60055 5.44798 3.56516 5.5342C3.52977 5.62041 3.47791 5.69867 3.41258 5.76444L0.206184 9.00484C0.0749283 9.13713 0.000822451 9.31693 0.000168847 9.50467C-0.000484758 9.69242 0.072368 9.87275 0.202699 10.006C0.333031 10.1392 0.510165 10.2144 0.695135 10.2151C0.880105 10.2157 1.05776 10.1418 1.18902 10.0095L4.38844 6.76203C4.78004 6.36405 5 5.82458 5 5.2621C5 4.69963 4.78004 4.16016 4.38844 3.76218Z" fill="white"/></svg></div>',
       responsive: [        
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


    $('.stocks-slider').slick({
        dots: false,
        infinite: false, 
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev slick-arrow"><svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.611558 7.23782L3.81098 10.4853C3.94158 10.6171 4.11825 10.691 4.3024 10.691C4.48655 10.691 4.66322 10.6171 4.79382 10.4853C4.85915 10.4195 4.911 10.3413 4.94639 10.2551C4.98178 10.1688 5 10.0764 5 9.98297C5 9.88957 4.98178 9.79709 4.94639 9.71087C4.911 9.62466 4.85915 9.54641 4.79382 9.48063L1.58742 6.24023C1.52209 6.17446 1.47023 6.0962 1.43484 6.00999C1.39945 5.92377 1.38123 5.8313 1.38123 5.7379C1.38123 5.6445 1.39945 5.55202 1.43484 5.4658C1.47023 5.37959 1.52209 5.30133 1.58742 5.23556L4.79382 1.99516C4.92507 1.86287 4.99918 1.68307 4.99983 1.49533C5.00048 1.30758 4.92763 1.12725 4.7973 0.994027C4.66697 0.8608 4.48984 0.785581 4.30486 0.784917C4.11989 0.784253 3.94224 0.858201 3.81098 0.99049L0.611558 4.23797C0.219959 4.63595 0 5.17542 0 5.7379C0 6.30037 0.219959 6.83984 0.611558 7.23782Z" fill="white"/></svg></div>',
        nextArrow: '<div class="slick-next slick-arrow"><svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.38844 3.76218L1.18902 0.514699C1.05842 0.382924 0.881748 0.30896 0.697599 0.30896C0.513451 0.30896 0.336784 0.382924 0.206184 0.514699C0.140851 0.580472 0.0889955 0.658723 0.0536076 0.74494C0.0182196 0.831157 0 0.923633 0 1.01703C0 1.11043 0.0182196 1.20291 0.0536076 1.28913C0.0889955 1.37534 0.140851 1.45359 0.206184 1.51937L3.41258 4.75977C3.47791 4.82554 3.52977 4.9038 3.56516 4.99001C3.60055 5.07623 3.61877 5.1687 3.61877 5.2621C3.61877 5.3555 3.60055 5.44798 3.56516 5.5342C3.52977 5.62041 3.47791 5.69867 3.41258 5.76444L0.206184 9.00484C0.0749283 9.13713 0.000822451 9.31693 0.000168847 9.50467C-0.000484758 9.69242 0.072368 9.87275 0.202699 10.006C0.333031 10.1392 0.510165 10.2144 0.695135 10.2151C0.880105 10.2157 1.05776 10.1418 1.18902 10.0095L4.38844 6.76203C4.78004 6.36405 5 5.82458 5 5.2621C5 4.69963 4.78004 4.16016 4.38844 3.76218Z" fill="white"/></svg></div>',
           responsive:  [
            {
              breakpoint: 1150,
                settings: {
                  slidesToShow: 4,
                 slidesToScroll: 1
              }
            },
            {
              breakpoint: 950,
                settings: {
                  slidesToShow: 3,
                 slidesToScroll: 1
              }
            },
            {
              breakpoint: 650,
                settings: {
                  slidesToShow: 2,
                 slidesToScroll: 1
              }
            },
            {
              breakpoint: 420,
                settings: {
                  slidesToShow: 1,
                 slidesToScroll: 1
              }
            }
          ]
      });

      $('.product-slider').slick({
        dots: false,
        infinite: false, 
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev slick-arrow"><svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.611558 7.23782L3.81098 10.4853C3.94158 10.6171 4.11825 10.691 4.3024 10.691C4.48655 10.691 4.66322 10.6171 4.79382 10.4853C4.85915 10.4195 4.911 10.3413 4.94639 10.2551C4.98178 10.1688 5 10.0764 5 9.98297C5 9.88957 4.98178 9.79709 4.94639 9.71087C4.911 9.62466 4.85915 9.54641 4.79382 9.48063L1.58742 6.24023C1.52209 6.17446 1.47023 6.0962 1.43484 6.00999C1.39945 5.92377 1.38123 5.8313 1.38123 5.7379C1.38123 5.6445 1.39945 5.55202 1.43484 5.4658C1.47023 5.37959 1.52209 5.30133 1.58742 5.23556L4.79382 1.99516C4.92507 1.86287 4.99918 1.68307 4.99983 1.49533C5.00048 1.30758 4.92763 1.12725 4.7973 0.994027C4.66697 0.8608 4.48984 0.785581 4.30486 0.784917C4.11989 0.784253 3.94224 0.858201 3.81098 0.99049L0.611558 4.23797C0.219959 4.63595 0 5.17542 0 5.7379C0 6.30037 0.219959 6.83984 0.611558 7.23782Z" fill="white"/></svg></div>',
        nextArrow: '<div class="slick-next slick-arrow"><svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.38844 3.76218L1.18902 0.514699C1.05842 0.382924 0.881748 0.30896 0.697599 0.30896C0.513451 0.30896 0.336784 0.382924 0.206184 0.514699C0.140851 0.580472 0.0889955 0.658723 0.0536076 0.74494C0.0182196 0.831157 0 0.923633 0 1.01703C0 1.11043 0.0182196 1.20291 0.0536076 1.28913C0.0889955 1.37534 0.140851 1.45359 0.206184 1.51937L3.41258 4.75977C3.47791 4.82554 3.52977 4.9038 3.56516 4.99001C3.60055 5.07623 3.61877 5.1687 3.61877 5.2621C3.61877 5.3555 3.60055 5.44798 3.56516 5.5342C3.52977 5.62041 3.47791 5.69867 3.41258 5.76444L0.206184 9.00484C0.0749283 9.13713 0.000822451 9.31693 0.000168847 9.50467C-0.000484758 9.69242 0.072368 9.87275 0.202699 10.006C0.333031 10.1392 0.510165 10.2144 0.695135 10.2151C0.880105 10.2157 1.05776 10.1418 1.18902 10.0095L4.38844 6.76203C4.78004 6.36405 5 5.82458 5 5.2621C5 4.69963 4.78004 4.16016 4.38844 3.76218Z" fill="white"/></svg></div>',
           responsive: [        
            {
              breakpoint: 1170,
                settings: {
                  slidesToShow: 3
              }
            },
            {
              breakpoint: 900,
                settings: {
                  slidesToShow: 2
              }
            },
            
            {
              breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                 slidesToScroll: 1
              }
            }
        ]
      });

      $('.tovar-item__slider').slick({
        dots: false,
        infinite: false, 
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev slick-arrow"><svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.611558 7.23782L3.81098 10.4853C3.94158 10.6171 4.11825 10.691 4.3024 10.691C4.48655 10.691 4.66322 10.6171 4.79382 10.4853C4.85915 10.4195 4.911 10.3413 4.94639 10.2551C4.98178 10.1688 5 10.0764 5 9.98297C5 9.88957 4.98178 9.79709 4.94639 9.71087C4.911 9.62466 4.85915 9.54641 4.79382 9.48063L1.58742 6.24023C1.52209 6.17446 1.47023 6.0962 1.43484 6.00999C1.39945 5.92377 1.38123 5.8313 1.38123 5.7379C1.38123 5.6445 1.39945 5.55202 1.43484 5.4658C1.47023 5.37959 1.52209 5.30133 1.58742 5.23556L4.79382 1.99516C4.92507 1.86287 4.99918 1.68307 4.99983 1.49533C5.00048 1.30758 4.92763 1.12725 4.7973 0.994027C4.66697 0.8608 4.48984 0.785581 4.30486 0.784917C4.11989 0.784253 3.94224 0.858201 3.81098 0.99049L0.611558 4.23797C0.219959 4.63595 0 5.17542 0 5.7379C0 6.30037 0.219959 6.83984 0.611558 7.23782Z" fill="white"/></svg></div>',
        nextArrow: '<div class="slick-next slick-arrow"><svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.38844 3.76218L1.18902 0.514699C1.05842 0.382924 0.881748 0.30896 0.697599 0.30896C0.513451 0.30896 0.336784 0.382924 0.206184 0.514699C0.140851 0.580472 0.0889955 0.658723 0.0536076 0.74494C0.0182196 0.831157 0 0.923633 0 1.01703C0 1.11043 0.0182196 1.20291 0.0536076 1.28913C0.0889955 1.37534 0.140851 1.45359 0.206184 1.51937L3.41258 4.75977C3.47791 4.82554 3.52977 4.9038 3.56516 4.99001C3.60055 5.07623 3.61877 5.1687 3.61877 5.2621C3.61877 5.3555 3.60055 5.44798 3.56516 5.5342C3.52977 5.62041 3.47791 5.69867 3.41258 5.76444L0.206184 9.00484C0.0749283 9.13713 0.000822451 9.31693 0.000168847 9.50467C-0.000484758 9.69242 0.072368 9.87275 0.202699 10.006C0.333031 10.1392 0.510165 10.2144 0.695135 10.2151C0.880105 10.2157 1.05776 10.1418 1.18902 10.0095L4.38844 6.76203C4.78004 6.36405 5 5.82458 5 5.2621C5 4.69963 4.78004 4.16016 4.38844 3.76218Z" fill="white"/></svg></div>',
        responsive: [        
          {
            breakpoint: 1200,
              settings: {
                slidesToShow: 2
            }
          },
                    
          {
            breakpoint: 600,
              settings: {
                slidesToShow: 1,
               slidesToScroll: 1
            }
          }
      ]
      });

      $('.diplom-slider').slick({
        dots: false,
        infinite: false, 
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<div class="slick-prev slick-arrow"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">        <path d="M9.73946 22C9.61882 22.0007 9.49923 21.9775 9.38754 21.9319C9.27586 21.8863 9.17428 21.8191 9.08862 21.7341L1.59946 14.245C1.17263 13.8192 0.833984 13.3134 0.602925 12.7566C0.371865 12.1998 0.25293 11.6028 0.25293 11C0.25293 10.3971 0.371865 9.80015 0.602925 9.24332C0.833984 8.68649 1.17263 8.18072 1.59946 7.75496L9.08862 0.2658C9.17409 0.180331 9.27556 0.112534 9.38723 0.0662784C9.4989 0.0200231 9.61859 -0.00378418 9.73946 -0.00378418C9.86033 -0.00378418 9.98001 0.0200231 10.0917 0.0662784C10.2034 0.112534 10.3048 0.180331 10.3903 0.2658C10.4758 0.351268 10.5436 0.452734 10.5898 0.564405C10.6361 0.676075 10.6599 0.795762 10.6599 0.916633C10.6599 1.0375 10.6361 1.15719 10.5898 1.26886C10.5436 1.38053 10.4758 1.482 10.3903 1.56747L2.90112 9.05663C2.38614 9.57226 2.09688 10.2712 2.09688 11C2.09688 11.7287 2.38614 12.4277 2.90112 12.9433L10.3903 20.4325C10.4762 20.5177 10.5444 20.6191 10.5909 20.7308C10.6375 20.8425 10.6614 20.9623 10.6614 21.0833C10.6614 21.2043 10.6375 21.3241 10.5909 21.4358C10.5444 21.5475 10.4762 21.6489 10.3903 21.7341C10.3046 21.8191 10.2031 21.8863 10.0914 21.9319C9.97969 21.9775 9.8601 22.0007 9.73946 22Z" fill="#DFDFDF"/></svg></div>',
        nextArrow: '<div class="slick-next slick-arrow"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">       <path d="M1.26054 4.00543e-05C1.38118 -0.000656128 1.50077 0.0224648 1.61246 0.0680828C1.72414 0.113701 1.82572 0.180916 1.91138 0.265875L9.40054 7.75504C9.82737 8.18079 10.166 8.68657 10.3971 9.2434C10.6281 9.80023 10.7471 10.3972 10.7471 11C10.7471 11.6029 10.6281 12.1998 10.3971 12.7567C10.166 13.3135 9.82737 13.8193 9.40054 14.245L1.91138 21.7342C1.82591 21.8197 1.72444 21.8875 1.61277 21.9337C1.5011 21.98 1.38141 22.0038 1.26054 22.0038C1.13967 22.0038 1.01999 21.98 0.908316 21.9337C0.796645 21.8875 0.69518 21.8197 0.609711 21.7342C0.524242 21.6487 0.456444 21.5473 0.410189 21.4356C0.363934 21.3239 0.340127 21.2042 0.340127 21.0834C0.340127 20.9625 0.363934 20.8428 0.410189 20.7311C0.456444 20.6195 0.524242 20.518 0.609711 20.4325L8.09888 12.9434C8.61386 12.4277 8.90312 11.7288 8.90312 11C8.90312 10.2713 8.61386 9.57233 8.09888 9.0567L0.609711 1.56754C0.523793 1.48232 0.455597 1.38094 0.40906 1.26924C0.362521 1.15753 0.338562 1.03772 0.338562 0.916706C0.338562 0.795696 0.362521 0.675882 0.40906 0.564178C0.455597 0.452475 0.523793 0.351091 0.609711 0.265875C0.695365 0.180916 0.796945 0.113701 0.908628 0.0680828C1.02031 0.0224648 1.1399 -0.000656128 1.26054 4.00543e-05Z" fill="#DFDFDF"/></svg></div>',
           responsive:[        
            {
              breakpoint: 900,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
              }
            },
            {
              breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
            },        
            {
              breakpoint: 450,
                settings: {
                  slidesToShow: 1,
                 slidesToScroll: 1
              }
            }
        ]
      });

      $('.awards-slider').slick({
        dots: false,
        infinite: false, 
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: '<div class="slick-prev slick-arrow"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">        <path d="M9.73946 22C9.61882 22.0007 9.49923 21.9775 9.38754 21.9319C9.27586 21.8863 9.17428 21.8191 9.08862 21.7341L1.59946 14.245C1.17263 13.8192 0.833984 13.3134 0.602925 12.7566C0.371865 12.1998 0.25293 11.6028 0.25293 11C0.25293 10.3971 0.371865 9.80015 0.602925 9.24332C0.833984 8.68649 1.17263 8.18072 1.59946 7.75496L9.08862 0.2658C9.17409 0.180331 9.27556 0.112534 9.38723 0.0662784C9.4989 0.0200231 9.61859 -0.00378418 9.73946 -0.00378418C9.86033 -0.00378418 9.98001 0.0200231 10.0917 0.0662784C10.2034 0.112534 10.3048 0.180331 10.3903 0.2658C10.4758 0.351268 10.5436 0.452734 10.5898 0.564405C10.6361 0.676075 10.6599 0.795762 10.6599 0.916633C10.6599 1.0375 10.6361 1.15719 10.5898 1.26886C10.5436 1.38053 10.4758 1.482 10.3903 1.56747L2.90112 9.05663C2.38614 9.57226 2.09688 10.2712 2.09688 11C2.09688 11.7287 2.38614 12.4277 2.90112 12.9433L10.3903 20.4325C10.4762 20.5177 10.5444 20.6191 10.5909 20.7308C10.6375 20.8425 10.6614 20.9623 10.6614 21.0833C10.6614 21.2043 10.6375 21.3241 10.5909 21.4358C10.5444 21.5475 10.4762 21.6489 10.3903 21.7341C10.3046 21.8191 10.2031 21.8863 10.0914 21.9319C9.97969 21.9775 9.8601 22.0007 9.73946 22Z" fill="#DFDFDF"/></svg></div>',
        nextArrow: '<div class="slick-next slick-arrow"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">       <path d="M1.26054 4.00543e-05C1.38118 -0.000656128 1.50077 0.0224648 1.61246 0.0680828C1.72414 0.113701 1.82572 0.180916 1.91138 0.265875L9.40054 7.75504C9.82737 8.18079 10.166 8.68657 10.3971 9.2434C10.6281 9.80023 10.7471 10.3972 10.7471 11C10.7471 11.6029 10.6281 12.1998 10.3971 12.7567C10.166 13.3135 9.82737 13.8193 9.40054 14.245L1.91138 21.7342C1.82591 21.8197 1.72444 21.8875 1.61277 21.9337C1.5011 21.98 1.38141 22.0038 1.26054 22.0038C1.13967 22.0038 1.01999 21.98 0.908316 21.9337C0.796645 21.8875 0.69518 21.8197 0.609711 21.7342C0.524242 21.6487 0.456444 21.5473 0.410189 21.4356C0.363934 21.3239 0.340127 21.2042 0.340127 21.0834C0.340127 20.9625 0.363934 20.8428 0.410189 20.7311C0.456444 20.6195 0.524242 20.518 0.609711 20.4325L8.09888 12.9434C8.61386 12.4277 8.90312 11.7288 8.90312 11C8.90312 10.2713 8.61386 9.57233 8.09888 9.0567L0.609711 1.56754C0.523793 1.48232 0.455597 1.38094 0.40906 1.26924C0.362521 1.15753 0.338562 1.03772 0.338562 0.916706C0.338562 0.795696 0.362521 0.675882 0.40906 0.564178C0.455597 0.452475 0.523793 0.351091 0.609711 0.265875C0.695365 0.180916 0.796945 0.113701 0.908628 0.0680828C1.02031 0.0224648 1.1399 -0.000656128 1.26054 4.00543e-05Z" fill="#DFDFDF"/></svg></div>',
        responsive:[        
          {
            breakpoint: 1100,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
          },
          {
            breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
          },
          {
            breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
          },   
          {
            breakpoint: 400,
              settings: {
                slidesToShow: 1,
               slidesToScroll: 1
            }
          }
      ]
      });

      let $Slider = $('.item-page__photo-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        focusOnSelect: true,
        fade: true,
        cssEase: 'linear',
      
      });

      $Slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        //console.log(nextSlide);

        $('.item-page__photo-small-item').removeClass('on');

        $('.item-page__photo-small-item').each(function(index) {
          if(index == nextSlide) {
            $(this).addClass('on');
          }
        }); 

      });

      $('.item-page__photo-small-item').on('click', function(e) {
        var slideIndex = $(this).data('item'); 
        $(this).addClass('on').siblings().removeClass('on');
        $Slider.slick( 'slickGoTo', parseInt( slideIndex ));
        e.preventDefault();
      });

      $(".filter-block__link").click(function() {
        $('.filter-block').toggle(); 
      });

    

      $(".catalog-icon").click(function() {
        if ($(".catalog-icon").hasClass("opened")) { 
             $(".menu-show").removeClass('active'); 
             $(".catalog-icon").removeClass('opened'); 
          }
          else{
             $(".menu-show").addClass('active');
             $(".catalog-icon").addClass('opened'); 
          }
      });

      function closeIt() {
        if ($(".right-menu").hasClass("open")) {
          $(".right-menu").removeClass('open'); 
      }
      else{
         $(".right-menu").addClass('open'); 
      }
      }

      $(".menu-block_right__menu").click(closeIt);

      $(".adapt-menu").click(closeIt);

      $(".right-menu__close").click(closeIt);

      $(".dropdown-sort").click(function() {
        if ($(".dropdown-sort__list").hasClass("open")) { 
          $(".dropdown-sort__list").removeClass('open'); 
       }
       else{
          $(".dropdown-sort__list").addClass('open'); 
       }
      });



var isScrolling=false;

$(window).on("DOMMouseScroll mousewheel",function(e){

    if(!isScrolling){
        isScrolling=true;

        var delta = parseInt(e.originalEvent.wheelDelta || -e.originalEvent.detail);

        if (delta >= 0) {
            isScrolling=false;

            $('.header-fixed').removeClass('open');

        }else {

            if($(window).scrollTop()>50){
                $('.header-fixed').addClass('open');
            }

            isScrolling=false;

        }
    }

});