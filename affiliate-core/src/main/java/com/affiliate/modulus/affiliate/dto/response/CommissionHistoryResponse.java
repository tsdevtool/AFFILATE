package com.affiliate.modulus.affiliate.dto.response;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;
import java.time.Instant;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CommissionHistoryResponse {
    Long id;
    String commissionType;
    BigDecimal amount;
    Instant lastModifiedAt;
}
