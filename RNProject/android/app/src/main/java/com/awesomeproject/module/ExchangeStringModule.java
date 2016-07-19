package com.awesomeproject.module;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by xiajw on 2016/7/19.
 */
public class ExchangeStringModule extends ReactContextBaseJavaModule {

    public ExchangeStringModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ExchangeStringModule";
    }

    @ReactMethod
    public void getString(Callback callback) {
        Intent intent = getCurrentActivity().getIntent();
        String string = "Native Default String";
        if (intent != null) {
            string = intent.getStringExtra("content");
        }
        callback.invoke(string);
    }

    @ReactMethod
    public void setString(String string) {
        Intent intent = new Intent();
        intent.putExtra("content", string);
        getCurrentActivity().setResult(Activity.RESULT_OK, intent);
        getCurrentActivity().finish();
    }
}
