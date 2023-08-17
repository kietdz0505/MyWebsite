function loadDanhSachSV() {
    fetch('../json/ho_so_SV.json').then(res => res.json()).then(data => {
        let h = "";
        let l = "";
        let them = false;
        let s = document.getElementById("submenu-hoso");
        for (let p of data) {
            h += `
            <div class="SinhVien" id="SinhVien">
                <div class="image"><img src="../image/${p.profileImage}" alt="Sinh Vien"></div>
                <div class="info"><h4>Họ Tên: <span id="hoTen">${p.hoTen}</span></h4>
                <h5>Khoa: <span id="khoa">${p.khoa}</span></h5>
                <h5>Mã Lớp: <span id="lop">${p.lop}</span></h5>
                <h5>Mã Số Sinh Viên: <span id="mssv">${p.mssv}</span></h5></div>
            </div>
            `;
            them = true;
            for (let i = 0; i <= $("#submenu-hoso>li").length; i++) {
                if (p.khoa === $("#submenu-hoso> li").eq(i).text()) {
                    them = false;
                    break;
                }
            }
            if (them === true) {
                l = `
                <li><a href="#${p.khoa.replace(/\s+/g, '_')}">${p.khoa}</a></li>
                `;
                if (s !== null)
                    s.innerHTML += l;
            }
        }
        let e = document.getElementById("DanhSachSinhVien");
        if (e !== null)
            e.innerHTML += h;
        $("#submenu-hoso li>a").click(function () {
            let find = $(this).attr("href");
            find = find.replace(/[_]/g, ' ');
            find = find.replace('#', '');
            $("#timSinhVien").val(`${find}`);
            let a = $("#timSinhVien").val();
            if (a !== "") {
                $("#DanhSachSinhVien>div").addClass("display-none");
                let tim, khoa;
                let lengthOfA = a.length;
                for (let i = 0; i < $("#DanhSachSinhVien>div").length; i++) {
                    tim = $(".SinhVien").eq(i);
                    khoa = tim.find("#khoa").text();
                    if (khoa.indexOf(a) >= 0)
                        $(".SinhVien").eq(i).removeClass("display-none");
                }
            }
            else
                $("#DanhSachSinhVien>div").removeClass("display-none");
        })
    })
}
window.onload = () => {
    loadDanhSachSV();
}
$(document).ready(() => {
    $("#timSinhVien").keyup(() => {
        let a = $("#timSinhVien").val();
        let f0 = $("#DanhSachSinhVien>div").length;
        if (a !== "") {
            $("#DanhSachSinhVien>div").addClass("display-none");
            let tim, hoTen, khoa, lop, mssv;
            let lengthOfA = a.length;
            for (let i = 0; i < f0; i++) {
                tim = $(".SinhVien").eq(i);           //Truy cập phần tử i
                hoTen = tim.find("#hoTen").text();    //Tìm id Họ Tên
                khoa = tim.find("#khoa").text();
                lop = tim.find("#lop").text();
                mssv = tim.find("#mssv").text();
                if (hoTen.toUpperCase().indexOf(a.toUpperCase()) >= 0)
                    $(".SinhVien").eq(i).removeClass("display-none");
                else if (khoa.toUpperCase().indexOf(a.toUpperCase()) >= 0)
                    $(".SinhVien").eq(i).removeClass("display-none");
                else if (lop.toUpperCase().indexOf(a.toUpperCase()) >= 0)
                    $(".SinhVien").eq(i).removeClass("display-none");
                else if (mssv.indexOf(a) >= 0)
                    $(".SinhVien").eq(i).removeClass("display-none");
            }
        }
        else
            $("#DanhSachSinhVien>div").removeClass("display-none");
    });
    window.addEventListener('scroll', function () {
        var backToTopBtn = document.getElementById('backToTopBtn');

        // Hiển thị nút "Back to top" khi cuộn xuống 10px
        if (window.scrollY > 10) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Xử lý sự kiện khi nhấp vào nút "Back to top"
    document.getElementById('backToTopBtn').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Cuộn mượt đến đầu trang
        });
    });

    document.getElementById('aboutUs').addEventListener('click', function () {
        window.scrollTo({
            top: 99999999,
            behavior: 'smooth'
        });
    });
})
$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > 160) {
        $('.nav').addClass("fixed");
    } else {
        $(".nav").removeClass("fixed");
    }
}) 