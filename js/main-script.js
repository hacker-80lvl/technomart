(function() {
    if (document.querySelectorAll(".modal") != null) {
        var modals = document.querySelectorAll(".modal");

        modals.forEach(modal => {
            modal.querySelector(".modal__close").addEventListener("click", function(event) {
                event.preventDefault();
                modal.classList.add("visually-hidden");
            });

            document.addEventListener("keydown", function(event) {
                if (event.keyCode === 27) modal.classList.add("visually-hidden");
            });
        });

        if (document.querySelector(".modal .modal-confirm") != null) {
            document.querySelector(".modal .modal-confirm div button:nth-child(2)").addEventListener("click", function(event) {
                event.preventDefault();
                document.querySelector(".tools__cart span").textContent = parseInt(document.querySelector(".tools__cart span").textContent) + 1;
                document.querySelector(".modal__confirm").classList.add("visually-hidden");
            });
        }
    }
})();

(function() {
    if (document.querySelector(".modal-mail") != null) {
        document.querySelector(".contacts button").addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(".modal__mail").classList.remove("visually-hidden");
        });

        document.querySelector(".contacts img").addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(".modal__map").classList.remove("visually-hidden");
        });
    }
})();

(function() {
    if (document.querySelector(".cost__range") != null) {
        var slider_handle_left = document.querySelector(".cost__range .range-handle:nth-child(1)");
        var slider_handle_right = document.querySelector(".cost__range .range-handle:nth-child(2)");
        var slider_line_left = document.querySelector(".cost__range .range-line:nth-child(1)");
        var slider_line_center = document.querySelector(".cost__range .range-line:nth-child(2)");
        var slider_line_right = document.querySelector(".cost__range .range-line:nth-child(3)");
        var slider_cost_counter_left = document.querySelector(".cost__counter input:nth-child(1)");
        var slider_cost_counter_right = document.querySelector(".cost__counter input:nth-child(2)");

        slider_handle_left.addEventListener("mousedown", function(event) {
            var startX = event.clientX;

            var onMouseMove = function(moveEvt) {
                moveEvt.preventDefault();

                var shiftX = startX - moveEvt.clientX;

                startX = moveEvt.clientX;

                if (slider_handle_left.offsetLeft - shiftX >= -9 && slider_handle_left.offsetLeft - shiftX <= slider_handle_right.offsetLeft - 30) {
                    slider_handle_left.style.left = slider_handle_left.offsetLeft - shiftX + "px";
                }
                slider_line_left.style.width = slider_handle_left.offsetLeft + 9 + "px";
                slider_line_center.style.width = 180 - (slider_line_left.offsetWidth + slider_line_right.offsetWidth) + "px";
                slider_cost_counter_left.placeholder = (slider_handle_left.offsetLeft + 9) * (36000 / 180) + " ₽";
            };

            var onMouseUp = function(upEvt) {
                upEvt.preventDefault();

                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
            };

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        });

        slider_handle_right.addEventListener("mousedown", function(event) {
            var startX = event.clientX;

            var onMouseMove = function(moveEvt) {
                moveEvt.preventDefault();

                var shiftX = startX - moveEvt.clientX;

                startX = moveEvt.clientX;

                if (slider_handle_right.offsetLeft - shiftX <= 171 && slider_handle_right.offsetLeft - shiftX >= slider_handle_left.offsetLeft + 30) {
                    slider_handle_right.style.left = slider_handle_right.offsetLeft - shiftX + "px";
                }
                slider_line_right.style.width = 180 - slider_handle_right.offsetLeft - 9 + "px";
                slider_line_center.style.width = 180 - (slider_line_left.offsetWidth + slider_line_right.offsetWidth) + "px";
                slider_cost_counter_right.placeholder = (slider_handle_right.offsetLeft + 9) * (36000 / 180) + " ₽";
            };

            var onMouseUp = function(upEvt) {
                upEvt.preventDefault();

                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
            };

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        });
    }
})();

(function() {
    if (document.querySelectorAll(".goods__item") != null) {
        var goods_items = document.querySelectorAll(".goods__item");
        var goods_item_buttons = document.querySelectorAll(".goods__item button");

        goods_items.forEach(goods_item => {
            goods_item.addEventListener("mouseover", function(evt) {
                goods_item.querySelector("div").classList.remove("visually-hidden");
                goods_item.querySelector("img").classList.add("visually-hidden");
            });

            goods_item.addEventListener("mouseout", function(evt) {
                goods_item.querySelector("div").classList.add("visually-hidden");
                goods_item.querySelector("img").classList.remove("visually-hidden");
            });
        });

        goods_item_buttons.forEach(button => {
            button.addEventListener("click", function(event) {
                document.querySelector(".modal__confirm").classList.remove("visually-hidden");
            });
        });
    }
})();

(function() {
    if (document.querySelector(".we-have__carousel") != null) {
        var carousel_item_1 = document.querySelector(".carousel__item:nth-child(1)");
        var carousel_item_2 = document.querySelector(".carousel__item:nth-child(2)");
        var carousel_control_left = document.querySelector(".carousel__control--left");
        var carousel_control_right = document.querySelector(".carousel__control--right");
        var carousel_pager_left = document.querySelector(".carousel__pager label:nth-child(1)");
        var carousel_pager_right = document.querySelector(".carousel__pager label:nth-child(2)");

        var onClick = function() {
            if (carousel_item_1.classList.contains("visually-hidden")) {
                carousel_item_1.classList.remove("visually-hidden");
                carousel_item_2.classList.add("visually-hidden");
                carousel_pager_left.querySelector("input").checked = true;
            } else {
                carousel_item_1.classList.add("visually-hidden");
                carousel_item_2.classList.remove("visually-hidden");
                carousel_pager_right.querySelector("input").checked = true;
            }
        };

        carousel_control_left.addEventListener("click", function(event) {
            event.preventDefault();
            onClick();
        });
        carousel_control_right.addEventListener("click", function(event) {
            event.preventDefault();
            onClick();
        });

        var interval = setInterval(onClick, 4000);

        carousel_control_left.addEventListener("mouseover", function(event) {
            event.preventDefault();
            clearInterval(interval);
        });
        carousel_control_right.addEventListener("mouseover", function (event) {
            event.preventDefault();
            clearInterval(interval);
        });
        
        carousel_control_left.addEventListener("mouseout", function(event) {
            event.preventDefault();
            interval = setInterval(onClick, 4000);
        });
        carousel_control_right.addEventListener("mouseout", function (event) {
            event.preventDefault();
            interval = setInterval(onClick, 4000);
        });
    }
})();

(function() {
    if (document.querySelector(".services__carousel") != null) {
        var services_carousel_controls = document.querySelectorAll(".services .carousel__control");
        var services_carousel_contents = document.querySelectorAll(".services .carousel__content div");
        for (let index = 0; index < services_carousel_controls.length; index++) {
            const element = services_carousel_controls[index];
            element.addEventListener("click", function(event) {
                event.preventDefault();
                services_carousel_contents.forEach(element => {
                    element.classList.add("visually-hidden");
                });
                services_carousel_controls.forEach(element => {
                    element.classList.remove("carousel__control--current");
                });
                element.classList.add("carousel__control--current");
                services_carousel_contents[index].classList.remove("visually-hidden");
            });
        }

        var intervalHandler = function() {
            if (services_carousel_controls[0].classList.contains("carousel__control--current")) {
                services_carousel_controls[0].classList.remove("carousel__control--current");
                services_carousel_controls[1].classList.add("carousel__control--current");
                services_carousel_contents[0].classList.add("visually-hidden");
                services_carousel_contents[1].classList.remove("visually-hidden");
            } else {
                if (services_carousel_controls[1].classList.contains("carousel__control--current")) {
                    services_carousel_controls[1].classList.remove("carousel__control--current");
                    services_carousel_controls[2].classList.add("carousel__control--current");
                    services_carousel_contents[1].classList.add("visually-hidden");
                    services_carousel_contents[2].classList.remove("visually-hidden");
                } else {
                    services_carousel_controls[2].classList.remove("carousel__control--current");
                    services_carousel_controls[0].classList.add("carousel__control--current");
                    services_carousel_contents[2].classList.add("visually-hidden");
                    services_carousel_contents[0].classList.remove("visually-hidden");
                }
            }
        };

        var interval = setInterval(intervalHandler, 3000);

        document.querySelector(".services .carousel__controls").addEventListener("mouseover", function (event) {
            event.preventDefault();
            clearInterval(interval);
        });

        document.querySelector(".services .carousel__controls").addEventListener("mouseout", function (event) {
            event.preventDefault();
            interval = setInterval(intervalHandler, 3000);
        });
        
        document.querySelector(".services .carousel__content--credit button").addEventListener("click", function(event){
           event.preventDefault();
           document.querySelector(".modal__mail").classList.remove("visually-hidden"); 
        });
    }
})();
