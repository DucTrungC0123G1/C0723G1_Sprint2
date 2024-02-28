package com.example.dried_seafood.service.product;

import com.example.dried_seafood.model.product.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {
    Page<Products> findAllProduct(Pageable pageable,String name );
}
