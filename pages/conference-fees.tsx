import { FC } from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { IUser } from "@/types/user.type";

import { getByToken } from "@/api/user.api";

import { withLayout } from "@/layout/Layout";

import { ConferenceFeesView } from "@/views";

const HomePage: FC<ConferenceFeesPageProps> = () => {
  return (
    <>
      <ConferenceFeesView />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<ConferenceFeesPageProps> = async ({ req: { cookies }, locale }) => {
  const token = cookies.token || null;
  let user = null;

  if (token) {
    const { data } = await getByToken(token);
    user = data;
  }

  return {
    props: {
      token,
      user,
      ...(await serverSideTranslations(String(locale))),
    },
  };
};

export default withLayout(HomePage);

interface ConferenceFeesPageProps extends Record<string, unknown> {
  token: string | null;
  user: IUser | null;
}
