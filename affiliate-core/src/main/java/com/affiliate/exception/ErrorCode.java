package com.affiliate.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;

@Getter
public enum ErrorCode {
    UNCATEGORIZED_EXCEPTION(9999, "Uncategorized error", HttpStatus.INTERNAL_SERVER_ERROR),
    INVALID_KEY(1001, "Uncategorized error", HttpStatus.BAD_REQUEST),
    USER_EXISTED(1002, "User existed", HttpStatus.BAD_REQUEST),
    USERNAME_INVALID(1003, "Username must be at least {min} characters", HttpStatus.BAD_REQUEST),
    INVALID_PASSWORD(1004, "Password must be at least {min} characters", HttpStatus.BAD_REQUEST),
    USER_NOT_EXISTED(1005, "User not existed", HttpStatus.NOT_FOUND),
    UNAUTHENTICATED(1006, "Unauthenticated", HttpStatus.UNAUTHORIZED),
    UNAUTHORIZED(1007, "You do not have permission", HttpStatus.FORBIDDEN),
    INVALID_DOB(1008, "Your age must be at least {min}", HttpStatus.BAD_REQUEST),
    AFFILIATE_EXISTED(1009, "Affiliate existed", HttpStatus.BAD_REQUEST),
    AFFILIATE_NOT_EXISTED(1010, "Affiliate not existed", HttpStatus.NOT_FOUND),
    INVALID_REFERRAL_CODE(1011, "Invalid referral code", HttpStatus.BAD_REQUEST),
    COMMISSION_RULE_NOT_EXISTED(1012, "Commission rule not existed", HttpStatus.NOT_FOUND),
    COMMISSION_RULE_CANNOT_BE_DELETED(1013, "Commission rule cannot be deleted", HttpStatus.BAD_REQUEST),
    MEMBERSHIP_TIER_NOT_EXISTED(1014, "Membership tier not existed", HttpStatus.NOT_FOUND),
    MEMBERSHIP_TIER_CANNOT_BE_DELETED(1015, "Membership tier cannot be deleted", HttpStatus.BAD_REQUEST),
    ;

    ErrorCode(int code, String message, HttpStatusCode statusCode) {
        this.code = code;
        this.message = message;
        this.statusCode = statusCode;
    }

    private final int code;
    private final String message;
    private final HttpStatusCode statusCode;
}
