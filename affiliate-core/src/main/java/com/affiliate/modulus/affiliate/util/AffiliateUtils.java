package com.affiliate.modulus.affiliate.util;

public class AffiliateUtils {
    public static String generateReferralCode(String name) {
        return name.substring(0, 3).toUpperCase();
    }
}
