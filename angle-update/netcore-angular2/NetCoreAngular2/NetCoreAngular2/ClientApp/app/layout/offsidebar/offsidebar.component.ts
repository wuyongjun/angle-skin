import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../core/settings/settings.service';
import { ThemesService } from '../../core/themes/themes.service';
import { TranslatorService } from '../../core/translator/translator.service';

@Component({
    selector: 'app-offsidebar',
    template: require('./offsidebar.component.html'),
    styles: [require('./offsidebar.component.scss')]
})
export class OffsidebarComponent implements OnInit {

    currentTheme: any ;
    selectedLanguage: string;

    constructor(public settings: SettingsService, public themes: ThemesService, public translator: TranslatorService) {
        this.currentTheme = themes.getDefaultTheme();
        this.selectedLanguage = this.getLangs()[0].code;
    }

    ngOnInit() { }

    setTheme() {
        this.themes.setTheme(this.currentTheme);
    }

    getLangs() {
        return this.translator.getAvailableLanguages();
    }

    setLang(value) {
        this.translator.useLanguage(value);
    }
}
