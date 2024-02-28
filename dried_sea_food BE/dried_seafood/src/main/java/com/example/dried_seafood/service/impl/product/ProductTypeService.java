package com.example.dried_seafood.service.impl.product;

import com.example.dried_seafood.model.product.TypeProduct;
import com.example.dried_seafood.repository.product.IProductTypeRepository;
import com.example.dried_seafood.service.product.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductTypeService implements IProductTypeService {
    @Autowired
    private IProductTypeRepository productTypeRepository;

    @Override
    public List<TypeProduct> findAll() {
        return productTypeRepository.findAll();
    }
}
