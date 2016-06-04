package com.awesomeproject;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

/**
 * Created by xiajw on 2016/6/1.
 */
public class ListExampleActivity extends ReactActivity {

    @Override
    protected String getMainComponentName() {
        return "ListExample";
    }

    @Override
    protected boolean getUseDeveloperSupport() {
        return true;
    }

    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(new MainReactPackage());
    }

}
