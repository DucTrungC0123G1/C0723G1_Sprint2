package com.example.dried_seafood.repository.product;

import com.example.dried_seafood.model.product.TypeProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface IProductTypeRepository extends JpaRepository<TypeProduct,Integer> {
}
