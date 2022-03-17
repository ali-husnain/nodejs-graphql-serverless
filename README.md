## NODE JS GRAPHQL SERVERLESS APP

This project is a template for AWS Lambda's and graphql operations.

### Services

- AWS Lambda
- Amazon DynamoDB
- Serverless Framework for IaC.

### How to setup the project

#### `npm install`

- This will install all the required dependencies.

#### `sls deploy`

- This command will deploy the resources to AWS using dev credentials

### Folder Structure

```markdown
.
├── .gitHub # CI/CD workflow for GitHub actions
├── Lambdas # NodeJs code for all Lambdas, including mysql helper functions
├── schema.api.graphql # AppSync schema
├── serverless.yml # Serverless framework configuration file supporting IaC
├── LICENSE
└── README.md
```

#### Steps to setup CI/CD using GitHub Actions

The following is the list of steps that is executed as a part of the CI/CD setup:

1. Store all account credentials in GitHub secrets to access them in environment without exposing. The AWS credentials will be used for deploying the application into your AWS account.

```
AWS_ACCESS_KEY_ID: ${{secrets.AWS_ACCESS_KEY_ID}}
AWS_SECRET_ACCESS_KEY: ${{secrets.AWS_SECRET_ACCESS_KEY}}
DEV_REGION: ${{secrets.DEV_REGION}}
PROD_REGION: ${{secrets.PROD_REGION}}
```

2. Install serverless
3. Install npm
