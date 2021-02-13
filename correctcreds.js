var MessagingService = (function () {
    var self = {};

    var subscriptions = [];

    self.subscribe = function (target, topic, callback) {
        if (hasSubscription(target))
            return;

        subscriptions.push({
            target,
            topic,
            callback
        });
    };

    self.unsubscribe = function (target, topic) {
        for (var i = subscriptions.length - 1; i >= 0; i--) {
            var subscription = subscriptions[i];

            if (subscription.target === target && subscription.topic === topic)
                subscriptions.splice(i, 1);
        }
    };

    self.publish = function (topic, payload) {
        if (!payload)
            payload = null;

        for (var i = 0; i < subscriptions.length; i++) {
            var subscription = subscriptions[i];

            if (subscription.topic === topic)
                subscription.callback(payload);
        }
    };

    var hasSubscription = function (target) {
        var found = false;

        for (var i = 0; i < subscriptions.length; i++) {
            var subscription = subscriptions[i];

            if (subscription.target === target && subscription.topic === topic) {
                found = true;
                break;
            }
        }

        return found;
    };

    return self;
}());

var ActionBar = function() {
    var self = {};

    self.changeName = function() {
        MessagingService.publish("NAME_CHANGED", { name: "John Smith" });
    };

    return self;
};

var AppContent = function(labelSelector) {
    var self = {};

    var __construct = function(labelSelector) {
        MessagingService.subscribe(self, "NAME_CHANGED", function(payload) {
            var labelDOMElement = document.querySelector(labelSelector);
            labelDOMElement.innerHTML = payload.name;
        });
    };

    __construct(labelSelector);

    return self;
};