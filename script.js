const goalDate = new Date('November 27, 2020 21:26:00');

        function updateElapsedTime() {
            const now = new Date();
            const elapsed = now - goalDate;

            // حساب عدد الأيام والساعات والدقائق والثواني
            const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
            const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

            // تحديث النص في البطاقات
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        }

        // تحديث الوقت كل ثانية
        setInterval(updateElapsedTime, 1000);

        // التحديث الأول عند تحميل الصفحة
        updateElapsedTime();