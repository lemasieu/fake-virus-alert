document.addEventListener('DOMContentLoaded', () => {
    // Lấy các phần tử input
    const inputFileName = document.getElementById('inputFileName');
    const inputAlertTitle = document.getElementById('inputAlertTitle');
    const inputMessage = document.getElementById('inputMessage');

    // Lấy các phần tử hiển thị trên thông báo giả
    const previewFileName = document.getElementById('previewFileName');
    const previewAlertTitle = document.getElementById('previewAlertTitle');
    const previewMessage = document.getElementById('previewMessage');
    const alertTitleText = document.getElementById('alertTitleText');
    const inputLogo = document.getElementById('inputLogo');
    const previewLogo = document.getElementById('previewLogo');
    const inputYear = document.getElementById('inputYear');
    const previewYear = document.getElementById('previewYear');
    const inputVersion = document.getElementById('inputVersion');
    const previewVersion = document.getElementById('previewVersion');

    // Lấy các nút điều khiển
    const closeBtn = document.getElementById('closeBtn');
    const btnCloseAlert = document.getElementById('btnCloseAlert');
    const btnDownload = document.getElementById('btnDownload');
    const fakeAlert = document.getElementById('fakeAlert');

    // Danh sách đen các thương hiệu diệt virus thật (3-4 chữ hoặc viết tắt)
    const bannedLogos = [
        'BKAV', 'AVG', 'ESET', 'MCAF', 'NORT', 'SOPH', 'AVAS', 'AVIR', 
        '360', 'KASP', 'F-SEC', 'MSE', 'AVP', 'MALW', 'AVAST', 'AVIRA', 
        'KASPERSKY', 'MCAFEE', 'NORTON', 'SOPHOS', 'PANDA', 'TREND', 
        'COMODO', 'DRWEB', 'BITDEFENDER', 'VBA', 'BKD'
    ];

    // Hàm cập nhật nội dung
    function updatePreview() {
        previewFileName.textContent = inputFileName.value || 'hidden.bat';
        previewAlertTitle.textContent = inputAlertTitle.value || 'Virus Alert !';
        alertTitleText.textContent = inputAlertTitle.value || 'Virus Alert !';
        previewMessage.textContent = inputMessage.value || 'File này có thể bị nhiễm virus...';
        
        // --- XỬ LÝ LOGO AN TOÀN ---
        let logoValue = inputLogo.value.toUpperCase().trim();
        const isBanned = bannedLogos.some(banned => logoValue.includes(banned));
        
        if (isBanned) {
            // Nếu nhập từ khóa cấm, thay thế bằng FAKE
            previewLogo.textContent = 'FAKE';
            inputLogo.classList.add('input-error');
            
            // Hiển thị cảnh báo nếu chưa có
            let warningEl = document.getElementById('logoWarning');
            if (!warningEl) {
                warningEl = document.createElement('div');
                warningEl.id = 'logoWarning';
                warningEl.textContent = '⚠️ Tên thương hiệu này bị cấm vì lý do an toàn!';
                inputLogo.parentNode.insertBefore(warningEl, inputLogo.nextSibling);
            }
        } else {
            // Nếu hợp lệ, hiển thị bình thường
            previewLogo.textContent = logoValue || 'SJAV';
            inputLogo.classList.remove('input-error');
            
            // Xóa cảnh báo nếu có
            const warningEl = document.getElementById('logoWarning');
            if (warningEl) {
                warningEl.remove();
            }
        }
        // --------------------------

        previewYear.textContent = inputYear.value || '2006';
        previewVersion.textContent = inputVersion.value || 'Fakefessional';
    }

    // Lắng nghe sự kiện nhập liệu
    inputFileName.addEventListener('input', updatePreview);
    inputAlertTitle.addEventListener('input', updatePreview);
    inputMessage.addEventListener('input', updatePreview);
    inputLogo.addEventListener('input', updatePreview);
    inputYear.addEventListener('input', updatePreview);
    inputVersion.addEventListener('input', updatePreview);    

    // Xử lý nút đóng (X) trên thông báo giả
    closeBtn.addEventListener('click', () => {
        fakeAlert.style.display = 'none';
    });

    // Xử lý nút ẩn thông báo ở bảng điều khiển
    btnCloseAlert.addEventListener('click', () => {
        if (fakeAlert.style.display === 'none') {
            fakeAlert.style.display = 'flex';
            btnCloseAlert.textContent = 'Ẩn/hiện thông báo';
        } else {
            fakeAlert.style.display = 'none';
            btnCloseAlert.textContent = 'Ẩn/hiện thông báo';
        }
    });

    // Xử lý nút Tải ảnh về
    btnDownload.addEventListener('click', () => {
        // Bỏ focus khỏi mọi phần tử đang được chọn để tránh dính hiệu ứng :active
        document.activeElement.blur();

        // Đảm bảo thông báo đang hiển thị trước khi chụp
        fakeAlert.style.display = 'flex';

        // Sử dụng html2canvas để chụp phần tử
        html2canvas(fakeAlert, {
            scale: 2, 
            backgroundColor: '#2d2d2d', 
            useCORS: true
        }).then(canvas => {
            // Tạo đường dẫn tải xuống
            const link = document.createElement('a');
            link.download = 'fake-virus-alert.png'; // Tên file tải về
            link.href = canvas.toDataURL('image/png');
            
            // Kích hoạt tải xuống
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch(err => {
            console.error("Lỗi khi tạo ảnh: ", err);
            alert("Có lỗi xảy ra khi tải ảnh. Vui lòng thử lại!");
        });
    });

    // Khởi tạo giá trị ban đầu
    updatePreview();
});