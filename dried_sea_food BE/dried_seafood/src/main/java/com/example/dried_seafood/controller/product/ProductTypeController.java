package com.example.dried_seafood.controller.product;

import com.example.dried_seafood.model.product.TypeProduct;
import com.example.dried_seafood.service.product.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/productType")
public class ProductTypeController {
    @Autowired
    private IProductTypeService productTypeService;

    @GetMapping("")
    public ResponseEntity<List<TypeProduct>> getTypeProductList() {
        List<TypeProduct> typeProductList = productTypeService.findAll();
        if (typeProductList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(typeProductList, HttpStatus.OK);
        }
    }
}
