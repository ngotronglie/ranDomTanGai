let a = document.getElementsByTagName('p');
    let diem = document.getElementsByTagName('h2');
    let name = document.getElementsByTagName('span');
    let index = 0;
    let arrQuaTrinh = [
        {
            "key": 0,
            "value": "Dỗi",
        },
        {
            "key": 1,
            "value": "Làm quen",
        },
        {
            "key": 2,
            "value": "Đi chơi",
        },
        {
            "key": 3,
            "value": "Tán tỉnh",
        },
        {
            "key": 4,
            "value": "Hẹn hò",
        }
    ];
    function plusSlides(n) {
        diChuyen(index += n);
    }

    let dem = 0;
    function diChuyen(n) {
        let ran = Math.floor(Math.random() * arrQuaTrinh.length);
        //n > chiều dài của mẩn trở lại ban đầu
        if (n > a.length) { // slides.length = 3 
            index = 1;
        }
        if (n < 1) {
            index = a.length;
        }
        for (let i = 0; i < a.length; i++) {
            a[i].style.color = "black";
        }
        a[index - 1].style.color = "red";
        switch (index) {
            case 3: case 6: case 8: case 11: case 14:
                a[index - 1].innerHTML = arrQuaTrinh[ran].value;
               // swal(arrQuaTrinh[ran].value);
                switch (arrQuaTrinh[ran].key) {
                    case 0:
                        diem[0].innerHTML = (dem -= 15) + "%";
                        swal({
                            title: arrQuaTrinh[ran].value,
                            text: "Hãy mau đi làm lành với cô ấy",
                            icon: "warning",
                        });
                        break;
                    case 1:
                        diem[0].innerHTML = (dem += 5) + "%";
                        swal({
                            title: arrQuaTrinh[ran].value,
                            text: "Hãy cùng nhau trò chuyện thật vui vẻ nào",
                            icon: "success",
                        });
                        break;
                    case 2:
                        diem[0].innerHTML = (dem += 10) + "%";
                        swal({
                            title: arrQuaTrinh[ran].value,
                            text: "Chúc bạn và cô ấy có 1 buổi đi chơi vui vẻ",
                            icon: "success",
                        });
                        break;
                        case 3:
                            diem[0].innerHTML = (dem += 15) + "%";
                            swal({
                                title: arrQuaTrinh[ran].value,
                                text: "Chúc bạn thành công",
                                icon: "success",
                            });
                            break;
                        case 4:
                            diem[0].innerHTML = (dem += 20) + "%";
                            swal({
                                title: arrQuaTrinh[ran].value,
                                text: "Bạn thật là may mắn",
                                icon: "success",
                            });
                            break;
                    }
                    break;
            }
    
            if (dem < 0 && index > 2) {
                diem[0].innerHTML = 0;
                swal({
                    title: "Bạn đã thất bại",
                    text: "Bạn có muốn chinh phục lại cô ấy ko",
                    icon: "error",
                }).then((value) => {
                    location.reload();
                });
                // diem[0].innerHTML = 0;
                // dem = 0;
            } else if (dem >= 100) {
                diem[0].innerHTML = 100;
                swal({
                    title: "Chúc mừng bạn",
                    text: "Bạn đã chinh phục cô ấy thành công",
                    icon: "success",
                }).then((value) => {
                    location.reload();
                });
                // diem[0].innerHTML = 0;
                // dem = 0;
            }
        }
    