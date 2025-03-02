package com.affiliate.modulus.affiliate.dto.response;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Data
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CommissionRuleResponse {
    Integer id;
    String name;
    BigDecimal amount;
}
