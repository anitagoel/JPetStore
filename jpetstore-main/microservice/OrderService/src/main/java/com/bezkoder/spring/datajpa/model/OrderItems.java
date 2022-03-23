package com.bezkoder.spring.datajpa.model;

import java.util.List;


public class OrderItems {
    Orders orders;
    List<LineItem> lineItems;
    
    public OrderItems(
        int orderId, 
        String userId, 
        String orderdate,
        String shipAddr1,
        String shipAddr2,
        String shipcity,
        String shipstate,
        String shipzip,
        String shipcountry,
        String billaddr1,
        String billaddr2,
        String billcity,
        String billstate,
        String billzip,
        String billcountry,
        String courier,
        String totalprice,
        String billtofirstname,
        String billtolastname,
        String shiptofirstname,
        String shiptolastname,
        String creditcard,
        String exprdate,
        String cardtype,  
        String locale,
        List<LineItem> lineItems
      ){
          orders = new Orders(
                orderId, 
                userId, 
                orderdate,
                shipAddr1,
                shipAddr2,
                shipcity,
                shipstate,
                shipzip,
                shipcountry,
                billaddr1,
                billaddr2,
                billcity,
                billstate,
                billzip,
                billcountry,
                courier,
                totalprice,
                billtofirstname,
                billtolastname,
                shiptofirstname,
                shiptolastname,
                creditcard,
                exprdate,
                cardtype,  
                locale
          );

            this.lineItems = lineItems;

      }
    
    

    public Orders getOrders(){
        return this.orders;
    }
    
    public List<LineItem> getLineItems(){
        return this.lineItems;
    }
}