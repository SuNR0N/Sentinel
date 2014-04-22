/**
 * Created by NiGhTy on 2014.04.20..
 */
(function() {

    "use strict";

    awaxa.sentinel.models.User = function()
    {
        var firstName = null;
        var lastName = null;
        var userName = null;
        var password = null;
        var passwordVerification = null;
        var isLogged = false;
        var role = null;

        this.setFirstName = function(firstName_) {
            firstName = firstName_;
        };

        this.getFirstName = function() {
            return firstName;
        };

        this.setLastName = function(lastName_) {
            lastName = lastName_;
        };

        this.getLastName = function() {
            return lastName;
        };

        this.setUserName = function(userName_) {
            userName = userName_;
        };

        this.getUserName = function() {
            return userName;
        };

        this.setPassword = function(password_) {
            password = password_;
        };

        this.getPassword = function() {
            return password;
        };

        this.setPasswordVerification = function(passwordVerification_) {
            passwordVerification = passwordVerification_;
        };

        this.setIsLogged = function(isLogged_) {
            isLogged = isLogged_;
        };

        this.getIsLogged = function() {
            return isLogged;
        };

        this.setRole = function(role_) {
            role = role_;
        };

        this.getRole = function() {
            return role;
        };

        this.clear = function()
        {
            firstName = null;
            lastName = null;
            userName = null;
            password = null;
            passwordVerification = null;
            isLogged = false;
            role = null;
        };

        return this;
    };

}());