type CertificateEntity = {
  country?: string;
  street?: string;
  locality?: string;
  organization?: string;
  organizationalUnit?: string;
  commonName?: string;
};

export type CertificateInfo = {
  subject: CertificateEntity;
  issuer: CertificateEntity;
  validFrom: string;
  validTo: string;
  subjectAltName?: string;
  isCa: boolean;
  fingerprint: string;
  isSelfSigned: boolean;
};

type CipherInfo = {
  name: string;
  version: string;
};

export type RequestSslInfo =
  | {
      authorized: boolean;
      authorizationError?: string;
      encrypted: boolean;
      cipher: CipherInfo;
      certs: CertificateInfo[];
    }
  | false;
