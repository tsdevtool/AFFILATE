package com.affiliate.modulus.affiliate.dto.request;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TrackReferralRequest {
    String userId;
    String referralCode;
    String commissionType;
}
