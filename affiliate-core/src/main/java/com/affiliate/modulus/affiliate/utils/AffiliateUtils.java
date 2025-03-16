package com.affiliate.modulus.affiliate.utils;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class AffiliateUtils {
    public static String generateReferralCode(String userId) {
        String hashed = hashId(userId);
        return base62Encode(hashed).substring(0, 8);
    }

    private static String hashId(String userId) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(userId.getBytes(StandardCharsets.UTF_8));

            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                hexString.append(String.format("%02x", b));
            }
            return hexString.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("SHA-256 Algorithm not found", e);
        }
    }

    private static String base62Encode(String hex) {
        long num = Long.parseUnsignedLong(hex.substring(0, 15), 16);
        StringBuilder encoded = new StringBuilder();
        int base = Const.BASE62_ALPHABET.length();
        while (num > 0) {
            int rem = (int) (num % base);
            encoded.append(Const.BASE62_ALPHABET.charAt(rem));
            num /= base;
        }
        return encoded.reverse().toString();
    }
}
