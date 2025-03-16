package com.affiliate.modulus.affiliate.dto.response;

import com.affiliate.modulus.auth.dto.response.UserResponse;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AffiliateResponse {
    UserResponse user;
    String referralCode;
    BigDecimal totalCommission;
}
