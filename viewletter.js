fetch("http://127.0.0.1/message/3").then((r) => {

    return r.text();

}).then((x) => {
    fetch("http://127.0.0.1/submit", {
        "headers": {
            "content-type": "application/json"
        },
        "body": x,
        "method": "POST",
    });
});
