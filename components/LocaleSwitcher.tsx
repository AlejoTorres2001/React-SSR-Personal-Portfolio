import Link from 'next/link'
import { Locale, localePath, locales } from '../lib/i18n'

const LocaleSwitcher = ({ locale }: { locale: Locale }) => {
  return (
    <div className="relative z-[1000] mr-8 flex h-[30px] items-center justify-end gap-2 text-uiWhite lg:mr-20">
      {locales.map((localeOption) => {
        const isActive = localeOption === locale

        return (
          <Link
            key={localeOption}
            href={localePath(localeOption)}
            className={`rounded px-3 py-1.5 font-poppins-semibold text-base font-semibold transition-colors ${
              isActive
                ? 'bg-darkOrange text-uiWhite'
                : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            {localeOption.toUpperCase()}
          </Link>
        )
      })}
    </div>
  )
}

export default LocaleSwitcher
