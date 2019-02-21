const rus = require('req-uscis-status');
const imessage = require('osa-imessage')

rus.getStatus('WAC1912250885',
    function (err, statusObject) {
        console.log(statusObject);
        imessage.send('+18326039023', statusObject.statusLongHtml);
        // { 
        //  errHtml: undefined,
        //  statusShortHtml: '<strong>Your Current Status:</strong> Card Was Delivered To Me By The Post Office <span class="appointment-sec-show" tabindex="-1" title="View Case Status Full Description">+</span>',
        //  statusShortText: 'Your Current Status: Card Was Delivered To Me By The Post Office',
        //  statusLongHtml: '<h1>Card Was Delivered To Me By The Post Office</h1> <p>On November 12, 2015, the Post Office delivered your new card for Receipt Number MSC1591345031, to the address that you gave us. The tracking number assigned is 9205592338400179142710. You can use your tracking number at <a href="https://tools.usps.com/go/TrackConfirmAction_input?origTrackNum=9205592338400179142710" target="_blank">www.USPS.com</a> in the Quick Tools Tracking section. If you move, go to <a href="https://egov.uscis.gov/coa/displayCOAForm.do" target="_blank">www.uscis.gov/addresschange</a> to give us your new mailing address.</p>',
        //  statusLongText: 'Card Was Delivered To Me By The Post Office On November 12, 2015, the Post Office delivered your new card for Receipt Number MSC1591345031, to the address that you gave us. The tracking number assigned is 9205592338400179142710. You can use your tracking number at www.USPS.com in the Quick Tools Tracking section. If you move, go to www.uscis.gov/addresschange to give us your new mailing address.' 
        // }
    }
);