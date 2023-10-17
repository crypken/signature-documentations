// Local Environment
const L_SITE_URL = "http://localhost:9000";
export const A_L_SITE_URL = "http://localhost:3005";
export const L_API_URL = "http://localhost:7070/graphql";
export const A_L_API_URL = "http://localhost:8080/graphql";
export const L_ONE_SIGNAL_APP_ID = "5a0214a5-db68-4c5f-9f6b-36b926f7bc9b";
export const L_ONE_SIGNAL_REST_API_KEY = "N2I4MjQyMjMtOTQ3Yy00MTc4LTg2YjEtZDc0ODljYTVhYWY5";
export const L_REST_URL = "http://localhost:7070/"

// Staging Environment
// const P_SITE_URL = "http://staging-signature.crypken.com";
// export const A_P_SITE_URL = "https://staging-accounts.crypken.com";
// export const P_API_URL = "https://staging-signature.crypken.com/graphql";
// export const A_P_API_URL = "https://staging-accounts.crypken.com/graphql";
// export const P_ONE_SIGNAL_APP_ID = "0848e4f6-b81e-4596-bfe7-54e27e827705";
// export const P_ONE_SIGNAL_REST_API_KEY = "ZTUwNDM4MDQtYjliYy00ZDU4LWJmMmItYWExYjBkNDJlZWJj";
// export const P_REST_URL = P_SITE_URL + "/"
// export const FILE_DOMAIN = "https://crypken-bucket.s3.ap-southeast-1.amazonaws.com/"
// export const STUDENT_TEMPLATE = "staging/signature/template/Certificate_Students_List_Template.csv"
// export const ONE_SIGNAL_NOTIFICATION_URL = "https://onesignal.com/api/v1/notifications"
// Staging WEB3
// export const CONTRACT_ADDRESS = "0xb9c89B89a093C1526c735909dFf35e88e034C12C"
// export const CONTRACT_WALLET_ADDRESS = "0x53bf35c5c56F90422695602d410233247633386A"
// export const L_BSC_TEST_NETWORK_LINK = "https://testnet.bscscan.com/"

// Production Environment
const P_SITE_URL = "http://signature.crypken.com";
export const A_P_SITE_URL = "https://accounts.crypken.com";
export const P_API_URL = "https://signature.crypken.com/graphql";
export const A_P_API_URL = "https://accounts.crypken.com/graphql";
export const P_ONE_SIGNAL_APP_ID = "0848e4f6-b81e-4596-bfe7-54e27e827705";
export const P_ONE_SIGNAL_REST_API_KEY = "ZTUwNDM4MDQtYjliYy00ZDU4LWJmMmItYWExYjBkNDJlZWJj";
export const P_REST_URL = P_SITE_URL + "/"
export const FILE_DOMAIN = "https://crypken-bucket.s3.ap-southeast-1.amazonaws.com/"
export const STUDENT_TEMPLATE = "production/signature/template/Certificate_Students_List_Template.csv"
export const ONE_SIGNAL_NOTIFICATION_URL = "https://onesignal.com/api/v1/notifications"
//Production WEB3
export const CONTRACT_ADDRESS = "0xcB66AFD4E49C843F31bf452BCAD82fFc620E1ba5"
export const CONTRACT_WALLET_ADDRESS = "0x53bf35c5c56F90422695602d410233247633386A"
export const L_BSC_TEST_NETWORK_LINK = "https://testnet.bscscan.com/"

export const SITE_URL = process.env.NODE_ENV === "production" ? P_SITE_URL : L_SITE_URL;
export const A_SITE_URL = process.env.NODE_ENV === "production" ? A_P_SITE_URL : A_L_SITE_URL;
export const API_URL = process.env.NODE_ENV === "production" ? P_API_URL : L_API_URL;
export const ACCOUNTS_API_URL = process.env.NODE_ENV === "production" ? A_P_API_URL : A_L_API_URL;
export const ONESIGNAL_APP_ID = process.env.NODE_ENV === "production" ? P_ONE_SIGNAL_APP_ID : L_ONE_SIGNAL_APP_ID;
export const ONESIGNAL_REST_API_KEY = process.env.NODE_ENV === "production" ? P_ONE_SIGNAL_REST_API_KEY : L_ONE_SIGNAL_REST_API_KEY;
export const REST_URL = process.env.NODE_ENV === "production" ? P_REST_URL : L_REST_URL;
export const BSC_NETWORK_LINK = process.env.NODE_ENV === "production" ? L_BSC_TEST_NETWORK_LINK : L_BSC_TEST_NETWORK_LINK;
export const JWTToken = (process.env.REACT_APP_JWTToken || "");

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_OFFSET = 0;
export const DEFAULT_PAGE_LENGTH = 10;
export const DEFAULT_COUNTRY_CODE = "my";

//S3
export const S3_REGION = "ap-southeast-1";
export const S3_BUCKET = "crypken-bucket";
export const S3_ACCESS_KEY_ID = "AKIAZJEWMEOSUOLMMNMC";
export const S3_SECRET_ACCESS_KEY = "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";
export const S3_BASE_URL = "https://crypken-bucket.s3.ap-southeast-1.amazonaws.com/";

export const SOCIAL_KEYS = {
    download: 'download',
    view: 'view',
    facebook: 'facebook',
    linkedin: "linkedin",
    instagram: "instagram",
    twitter: "twitter",
    whatsapp: 'whatsapp',
    email: 'email'

}


