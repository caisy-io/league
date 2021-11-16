yarn global add vercel

DEPLOYMENT_URL=$(vercel --token=$VERCEL_TOKEN --confirm --scope=caisy --no-clipboard --name="$VERCEL_NAME" ) && echo "BRANCH_NAME=$BRANCH_NAME" &&\
curl   --header "Authorization: Basic $INTERNAL_AUTOMATION_AUTH_TOKEN" \
https://dev.caisy.io/api/internal-automation/trigger/linear/comment-preview-link\?branch\=$BRANCH_NAME\&body\=Preview-Link:%20$DEPLOYMENT_URL || true