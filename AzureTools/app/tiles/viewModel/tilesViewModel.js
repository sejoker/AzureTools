﻿exports.create = function ($state, $actionBarItems) {
    'use strict';

    return new function() {
        var self = this;
        $actionBarItems.IsActionBarVisible = false;

        self.openRedis = function() {
            $state.go('redis', {});
        }
    }
}