window.addEventListener("load", (() => {

    function showNotice(...params) {
        alert('You have visited the page more than ' + params + ' times!' );
    }

    function storageVisitCounter(count, collback) {

        const cntSess = window.sessionStorage.getItem('cntSess');
        let cntLocal = window.localStorage.getItem('cntLocal');

        console.log({
            'cntLocal': [cntLocal, typeof cntLocal],
            'cntSess': [cntSess, typeof cntSess]
        });

        if (cntLocal < count || cntLocal===null) {

            if (cntSess===null) {

                if(cntLocal===null) {
                    cntLocal = 1;
                } else {
                    cntLocal = (parseInt(cntLocal));
                    cntLocal++;
                }

                console.log('Set cntLocal:' + cntLocal);

                window.localStorage.setItem('cntLocal', cntLocal);
                window.sessionStorage.setItem('cntSess', 'Y');
            }
        } else {
            collback(cntLocal);
        }
    }

    storageVisitCounter(3, showNotice);

}));