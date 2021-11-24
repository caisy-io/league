

function sb_success () {
    echo "Storybook build successful."
    exit 0
}

function sb_failed () {
     grep -vwE "webpack.Progress" sb-out.txt 
     echo "-- ERROR --"
     echo "-- the storybook output does contain \"failed\" -> see above"
     echo "--"
     exit 1
}

 

grep -q "failed" ./sb-out.txt; [ $? -eq 0 ] && sb_failed || sb_success
