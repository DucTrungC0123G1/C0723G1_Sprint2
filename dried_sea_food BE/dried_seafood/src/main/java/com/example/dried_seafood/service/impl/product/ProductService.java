package com.example.dried_seafood.service.impl.product;

import com.example.dried_seafood.model.product.Products;
import com.example.dried_seafood.repository.product.IProductRepository;
import com.example.dried_seafood.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;
    @Override
    public Page<Products> findAllProduct(Pageable pageable, String nameSearch) {
        return productRepository.findAllProduct(pageable, "%"+nameSearch+"%");
    }
}
