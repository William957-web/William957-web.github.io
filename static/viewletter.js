fetch("http://127.0.0.1/message/3").then(res => {
    return res.text();
}).then(res => {
    fetch("http://127.0.0.1/submit", {
        "headers": {
            "content-type": "application/json"
        },
        "body": res,
        "method": "POST",
    });
});
