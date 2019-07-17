package com.accolite.au.java;

import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface Servlet {
	String servletName();

	String urlPattern();
}
