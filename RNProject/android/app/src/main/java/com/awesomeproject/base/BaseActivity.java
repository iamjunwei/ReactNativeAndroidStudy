package com.awesomeproject.base;

import com.awesomeproject.rnpackage.MyReactPackage;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;

import java.util.Arrays;
import java.util.List;

/**
 * Base Activity
 * Created by xiajw on 2016/7/19.
 */
public abstract class BaseActivity extends ReactActivity{

    @Override
    protected boolean getUseDeveloperSupport() {
        return true;
    }

    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(new MyReactPackage());
    }
}
