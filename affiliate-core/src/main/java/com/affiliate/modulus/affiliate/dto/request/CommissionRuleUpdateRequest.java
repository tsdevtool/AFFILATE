package com.affiliate.modulus.affiliate.dto.request;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CommissionRuleUpdateRequest {
    String name;
    BigDecimal amount;
}
