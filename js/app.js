function updateCounter() {
    const now = new Date();
    const currentYear = now.getFullYear();

    // 1 сентября текущего года
    const startOfPeriod = new Date(currentYear, 8, 1); // 8 — это сентябрь (месяцы считаются с нуля)

    // 1 июня следующего года
    const summerDate = new Date(currentYear + 1, 5, 1); // 5 — это июнь

    // Если сейчас до 1 сентября, считаем с сентября прошлого года
    if (now < startOfPeriod) {
        startOfPeriod.setFullYear(currentYear - 1);
        summerDate.setFullYear(currentYear);
    }

    // Если время уже после 1 июня, перенастраиваем на новый период
    if (now > summerDate) {
        startOfPeriod.setFullYear(currentYear);
        summerDate.setFullYear(currentYear + 1);
    }

    const diff = summerDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const getSummerTimer = document.querySelector('#time')
    const getPercentTimer = document.querySelector('#percent')

    getSummerTimer.innerText = `${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`

    // Расчёт процента времени между 1 сентября и 1 июня
    const totalMillisecondsInPeriod = summerDate - startOfPeriod;
    const elapsedMilliseconds = now - startOfPeriod;

    const percentage = Math.min(100, Math.max(0, (elapsedMilliseconds / totalMillisecondsInPeriod) * 100));

    getPercentTimer.innerText = `Пройдено: ${percentage.toFixed(2)}% времени до лета`
}

setInterval(updateCounter, 1000);
updateCounter();
