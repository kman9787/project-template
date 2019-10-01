package org.kash.demo.jdbcdemo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;



public class App {

  public static void main(String[] args) {
    System.out.println("Testing Mysql Connection..");
    
    Connection conn = null;
    
    try {
    	 Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
    	 
    	 conn = DriverManager.getConnection("jdbc:mysql://192.168.10.105:32771/db_dev?allowPublicKeyRetrieval=true&useSSL=false", "dev_user", "dev_user");
    	 //conn = DriverManager.getConnection("jdbc:mysql://(host=192.168.10.105,port=32771,allowPublicKeyRetrieval=true,useSSL=false)/db_dev", "dev_user", "dev_user");
    	 
    	 
    	 Statement stmt = conn.createStatement();
    	 ResultSet rs = stmt.executeQuery("SELECT * FROM user");
    	 
    	 while(rs.next()) {
    		 System.out.println(rs.getString(1));
    	 }
    	
    } catch (Exception e) {
		e.printStackTrace();
	} finally {
		try {
			conn.close();
		} catch(Exception e) {}
			
	}
  }

}
