
    $('#caseStudy1').hover(function() {
        $(this).css("cursor", "pointer");
        $(this).animate({
            width: "50%",
            height: "50%"
        }, 'slow');
    
    }, function() {
        $(this).animate({
            width: "28%"
        }, 'slow');
    });