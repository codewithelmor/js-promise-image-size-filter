(function () {

    function image_details(file) {
        return new Promise(function (resolve, reject) {
            try {
                const img = new Image();
                img.src = window.URL.createObjectURL(file);
                img.onload = function () {
                    width = img.naturalWidth;
                    height = img.naturalHeight;
                    window.URL.revokeObjectURL(img.src);
                    resolve({ width: width, height: height, type: file.type });
                };
            } catch (error) {
                reject(Error(error));
            }
        });
    };

    function image_size_validation(file, width, height) {
        return new Promise(function (resolve, reject) {
            try {
                image_details(file, width, height)
                .then((response) => {
                    if (width == response.width && height == response.height) {
                        resolve({ width: response.width, height: response.height, type: response.type, status: true, message: 'Correct image size' });
                    } else {
                        reject({ width: response.width, height: response.height, type: response.type, status: false, message: 'Incorrect image size' });
                    }
                })
                .catch((error) => {
                    reject(Error(error));
                });
            } catch (error) {
                reject(Error(error));
            }
        });
    };

    let input = document.getElementById('formFile');

    var forms = document.querySelectorAll('.needs-validation');

    input.addEventListener('change', () => {
        let files = input.files;
        if (files.length > 0) {
            let file = files[0];

            if (file.type != 'image/png') {
                // 'File Type must be jpeg or png';
                return;
            }

            const width = 1920;
            const height = 1080;

            image_size_validation(file, width, height)
                .then((response) => {
                    console.log(response);
                    toastr.success(response.message);
                })
                .catch((error) => {
                    console.log(error);
                    input.value = null;
                    toastr.error(error.message);
                });

        }

    });

})();