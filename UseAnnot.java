package com.accolite.au.java;

@Servlet(servletName = "firstServlet", urlPattern = "/class/UseAnnot")
public class UseAnnot {
	int a, b, c;

	void sampleMethod() {

		System.out.println("Hey there .,Playing with Annotations");
	}
}
