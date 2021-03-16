package com.example.androidsample;

import android.os.Bundle;
import android.view.View;

import com.example.androidsample.databinding.ActivityMainBinding;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private ActivityMainBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityMainBinding.inflate(getLayoutInflater());
        View view = binding.getRoot();
        setContentView(view);
    }

    public void convertCurrency(View view) {
        if (!binding.dollarText.getText().toString().equals("")) {
            Float dollarValue = Float.valueOf(binding.dollarText.getText().toString());
            Float euroValue = dollarValue * 0.85F;
            binding.textView.setText(euroValue.toString());
        } else {
            binding.textView.setText(R.string.no_value_string);
        }
    }

}