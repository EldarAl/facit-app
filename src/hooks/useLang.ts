import { useTranslation } from 'react-i18next';

export default function useLang(text: string) {
  const { t } = useTranslation('translation');

	return t(text) ;
}
