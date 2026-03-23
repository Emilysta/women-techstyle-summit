import { Button } from "../components/button/button";
import { CompleteCodeRenderer } from "../components/complete-code-renderer/complete-code-renderer";
import { CostGraph } from "../components/cost-graph/cost-graph";
import { BrandPage } from "../components/examples/brand-page/brand-page";
import { ColorsCss } from "../components/examples/colors-css/colors-css";
import { ColorsScss } from "../components/examples/colors-scss/colors-scss";
import { TypographyCss } from "../components/examples/typography-css/typography-css";
import { TypographyScss } from "../components/examples/typography-scss/typography-scss";
import { Graph } from "../components/graph/graph";
import { ImageRenderer } from "../components/image-renderer/image-renderer";
import { PicturesContainer } from "../components/pictures-container/pictures-container";
import { Step } from "../components/stepper/stepper";
import { BrokenAxeSlide } from "../slides/broken-axe-slide/broken-axe-slide";
import { InitialSlide } from "../slides/initial-slide/initial-slide";
import { SectionTitle } from "../slides/section-title/section-title";
import { Slide } from "../slides/slide/slide";

export const slides: Step[] = [
  {
    id: 'initial-slide',
    component: InitialSlide,
  },
  {
    id: 'about-me',
    component: Slide,
    inputs: {
      title: 'O mnie',
      leftSideContent: {
        listPoints: [
          { text: 'Software Developer', },
          { text: 'Lubię podróżować', },
          { text: 'Kocham zwierzęta', },
          { text: 'Wolny czas spędzam w ogrodzie', },
        ],
        listType: 'unordered',
      },
      rightSideContent: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        components: [{
          component: PicturesContainer,
          inputs: {
            mainPictureLink: './profile.jpg',
            leftPictureLink: './with_dog.webp'
          }
        }],
        minWidth: '450px'
      }
    }
  },
  {
    id: 'intro',
    component: SectionTitle,
    inputs: {
      title: 'Wprowadzenie'
    }
  },
  {
    id: 'intro-ui',
    component: Slide,
    inputs: {
      title: 'User interface (UI)',
      leftSideContent: {
        listTitle: 'Interfejs użytkownika to:',
        listPoints: [
          { text: 'nie tylko <i>flat screen</i> i <i>design</i>', },
          { text: 'kod, który działa "pod spodem"', },
          { text: 'sposób na interakcje z użytkownikiem', },
          { text: 'czytelna i dostępna zawartość', },
          { text: 'kolory i typografia', },
        ],
        listType: 'unordered',
      },
      rightSideContent: {
        components: [{
          component: Graph,
          inputs: {
            centeredText: 'UI',
            text1: 'Motion',
            text2: 'Typography',
            text3: 'Accessibility',
            text4: 'Colors'
          }
        }],
        justifyContent: 'center',
      }
    }
  },
  {
    id: 'project-decisions',
    component: Slide,
    inputs: {
      title: 'Złe decyzje projektowe a ich koszta',
      leftSideContent: {
        listPoints: [
          {
            text: 'Nieuwzględnienie takich elementów, jak:',
            list: {
              points: [
                { text: 'tokenizacja czcionek', },
                { text: 'tokenizacja kolorów', },
                { text: 'wsparcie accessibility', },
              ],
              type: 'unordered'
            },
          },
          {
            text: 'Koszta jakie ponosimy:',
            list: {
              points: [
                { text: 'Nakłady pracy', },
                { text: 'Pieniądze', },
                { text: 'Opóźnienia', },
              ],
              type: 'unordered'
            },
          }

        ],
        listType: 'unordered',
      },
      rightSideContent: {
        components: [
          {
            component: CostGraph,

          }
        ],
        minWidth: '400px'
      }
    }
  },
  {
    id: 'microinteractions-section',
    component: SectionTitle,
    inputs: {
      title: 'Mikrointerakcje i animacje'
    }
  },
  // {
  //   component: Slide,
  //   inputs: {
  //     title: 'Mikrointerakcje i animacje',
  //     leftSideContent: {
  //       listTitle: 'To czy użyć animacji czy też nie, zależy od:',
  //       listPoints: [
  //         { text: 'jaką akcje chcesz wykonać', },
  //         { text: 'do kogo skierowany jest kontent', },
  //         { text: 'co chcesz zaznaczyć', },
  //       ],
  //       listType: 'unordered',
  //     },
  //   }
  // },
  {
    id: 'microinteractions',
    component: Slide,
    inputs: {
      title: 'Mikrointerakcje i animacje',
      leftSideContent: {
        listPoints: [
          {
            text: 'When to:',
            list: {
              points: [
                { text: 'kiedy animacje podkreślają akcje użytkownika', },
                { text: 'kiedy są dodatkiem a nie główną częścią', },
              ],
              type: 'unordered',
            }
          },
          {
            text: 'When <u>not</u> to:',
            list: {
              points: [
                { text: 'kiedy animacje odrywają uwagę od kontentu', },
                { text: 'kiedy są oderwane od marki', },
                { text: 'kiedy strona przestaje być responsywna', },
              ],
              type: 'unordered',
            }
          },
        ],
        listType: 'unordered',
      },
      rightSideContent: {
        listTitle: 'Możliwości:',
        listPoints: [
          { text: 'CSS Animations', },
          { text: 'CSS Transitions', },
          { text: 'JS Animations', },
        ],
        listType: 'unordered',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      }
    },
  },
  {
    id: 'microinteractions-example',
    component: Slide,
    inputs: {
      title: 'Mikrointerakcje i animacje',
      leftSideContent: {
        components: [
          {
            component: Button,
            inputs: {
              icon: 'ph-tag-simple',
              text: 'Classic'
            }
          },
          {
            component: Button,
            inputs: {
              icon: 'ph-arrow-right',
              text: 'Simple',
              animation: 'simple'
            }
          },
          {
            component: Button,
            inputs: {
              icon: 'ph-bezier-curve',
              text: 'Shake',
              animation: 'shake'
            }
          }],
        justifyContent: 'center',
        alignItems: 'center'
      },
      rightSideContent: {
        components: [{
          component: CompleteCodeRenderer,
          inputs: {
            files: [{
              id: 'scss',
              filePath: './components/button/button.scss',
              value: 'scss',
              text: 'button.scss',
            }],
          },
        }],
        minWidth: '700px',
        justifyContent: 'center',
        alignItems: 'center'
      },
    }
  },
  {
    id: 'colors-system-section',
    component: SectionTitle,
    inputs: {
      title: 'Systemy kolorów'
    }
  },
  {
    id: 'colors-system-roles',
    component: Slide,
    inputs: {
      title: 'Rola kolorów',
      leftSideContent: {
        listTitle: 'Podział na:',
        listPoints: [
          { text: 'akcenty', },
          { text: 'baza/neutralne', },
          { text: 'informacyjne', },
        ],
        listType: 'unordered',
      },
      rightSideContent: {
        listTitle: 'Inny podział:',
        listPoints: [
          { text: 'marki', },
          { text: 'systemowe', },
          { text: 'sematyczne', },
        ],
        listType: 'unordered',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
      },
    },
  },
  {
    id: 'colors-system-importance',
    component: Slide,
    inputs: {
      title: 'Dlaczego tworzenie systemu kolorów aplikacji ma znaczenie?',
      leftSideContent: {
        listPoints: [
          { text: 'rebranding aplikacji', },
          { text: '<i>Hardcoded hell</i>', },
          { text: 'wsparcie dla osób niepełnosprawnych', },
          { text: 'możliwość łatwego dostosowania styli z poziomu UI', },
        ],
        listType: 'unordered',
      },
      rightSideContent: {
        components: [{
          component: Graph,
          inputs: {
            centeredText: 'Color',
            text4: 'rgb(25,25,25)',
            text2: '#191919',
            text1: 'black',
          }
        }],
        justifyContent: 'center',
      }
    },
  },
  // {
  //   component: Slide,
  //   inputs: {
  //     title: 'Budowanie systemu kolorów',
  //     leftSideContent: {
  //       listPoints: [
  //         { text: 'zaczyna się od designu', },
  //         { text: 'dopiero potem zależy od developerów', },
  //       ],
  //       listType: 'unordered',
  //     },
  //   },
  // },
  {
    id: 'colors-system-design',
    component: Slide,
    inputs: {
      title: 'Budowanie systemu kolorów',
      leftSideContent: {
        listTitle: 'Od strony designu:',
        listPoints: [
          { text: 'Hierarchia kolorów - Zasada 60-30-10', },
          { text: 'Tokenizacja', },
          { text: 'Spełnienie Accessibility - <i>Contrast Ratio</i>' },
          {
            text: 'Przygotowanie komponentów w różnych stanach',
            list: {
              points: [
                { text: 'Przejścia', },
                { text: 'Kolory', },
                { text: 'Kształty' }
              ],
              type: 'unordered'
            }
          }
        ],
        listType: 'unordered',
      },
      rightSideContent: {
        listTitle: 'Od strony kodu:',
        listPoints: [
          {
            text: 'Tokenizacja kolorów',
            list: {
              points: [
                { text: 'Zmienne CSS', },
                { text: 'Zmienne SCSS', },
              ],
              type: 'unordered'
            }
          },
          { text: 'Utrzymanie kolorów na poziomie roli, a nie akcji' },
          { text: 'Często, upilnowanie designerów i ograniczanie ilości kolorów' }
        ],
        listType: 'unordered',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      },
    },
  },
  {
    id: 'colors-system-css-example',
    component: Slide,
    inputs: {
      title: 'Przykład systemu kolorów w oparciu o CSS',
      leftSideContent: {
        components: [{
          component: ColorsCss,
        }],
        minWidth: '450px',
      },
      rightSideContent: {
        minWidth: '450px',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        components: [{
          component: CompleteCodeRenderer,
          inputs: {
            order: 'column-reverse',
            files: [{
              id: 'colors-css',
              filePath: './components/examples/colors-css/base.css',
              value: 'scss',
              text: 'base.css',
            },
            {
              id: 'colors-css-2',
              filePath: './components/examples/colors-css/modified.css',
              value: 'scss',
              text: 'modified.css',
            },
            {
              id: 'colors-css-example-html',
              filePath: './components/examples/colors-css/colors-css.html',
              value: 'html',
              text: 'HTML',
            },
            {
              id: 'colors-css-example-ts',
              filePath: './components/examples/colors-css/colors-css.ts',
              value: 'ts',
              text: 'TS',
            },
            ],
          },
        }],
      },
    },
  },
  {
    id: 'colors-system-scss-example',
    component: Slide,
    inputs: {
      title: 'Przykład systemu kolorów w oparciu o SCSS',
      leftSideContent: {
        minWidth: '450px',
        components: [{
          component: ColorsScss,
        }],
      },
      rightSideContent: {
        minWidth: '450px',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        components: [{
          component: CompleteCodeRenderer,
          inputs: {
            order: 'column-reverse',
            files: [{
              id: 'colors-scss',
              filePath: './components/examples/colors-scss/base.scss',
              value: 'scss',
              text: 'base.scss',
            },
            {
              id: 'colors-scss-2',
              filePath: './components/examples/colors-scss/modified.scss',
              value: 'scss',
              text: 'modified.scss',
            },
            {
              id: 'colors-scss-3',
              filePath: './components/examples/colors-scss/colors.scss',
              value: 'scss',
              text: 'colors.scss',
            },
            {
              id: 'colors-scss-example-html',
              filePath: './components/examples/colors-scss/colors-scss.html',
              value: 'html',
              text: 'HTML',
            },
            {
              id: 'colors-scss-example-ts',
              filePath: './components/examples/colors-scss/colors-scss.ts',
              value: 'ts',
              text: 'TS',
            },
            ],
          },
        }],
      },
    },
  },
  {
    id: 'typography-system-section',
    component: SectionTitle,
    inputs: {
      title: 'Typografia'
    }
  },
  {
    id: 'typography-system-importance',
    component: Slide,
    inputs: {
      title: 'Dlaczego tworzenie systemu typografii aplikacji ma znaczenie?',
      leftSideContent: {
        listPoints: [
          { text: 'rebranding aplikacji', },
          { text: '<i>Hardcoded hell</i>', },
          { text: 'wsparcie dla osób niepełnosprawnych', },
          { text: 'możliwość łatwego dostosowania czcionek z poziomu UI', },
        ],
        listType: 'unordered',
      },
      rightSideContent: {
        components: [{
          component: Graph,
          inputs: {
            centeredText: 'Font',
            text4: 'font-size',
            text2: 'font-weight',
            text1: 'font-family',
            text3: 'line-height'
          }
        }],
        justifyContent: 'center',
      }
    },
  },
  {
    id: 'typography-system-how-to',
    component: Slide,
    inputs: {
      title: 'Budowanie systemu typografii',
      leftSideContent: {
        listPoints: [
          {
            text: 'Wybór czcionek',
            list: {
              points: [
                { text: 'Ograniczenie ilości czcionek do 2-3', },
                { text: 'Weryfikacja czcionek w kontekście marki', },
                { text: 'Weryfikacja w kontekście założonych języków' }
              ],
              type: 'unordered',
            },

          },
          {
            text: 'Dobór rozmiaru',
            list: {
              points: [
                { text: 'Font weight', },
                { text: 'Line height', },
                { text: 'Font size' }
              ],
              type: 'unordered',
            },
          },
          {
            text: 'Performance',
            list: {
              points: [
                { text: 'Dynamiczne skalowanie rozmiaru', },
                { text: 'Ładowanie czcionek', },
              ],
              type: 'unordered',
            }

          }
        ],
        listType: 'unordered',
      },
    },
  },
  {
    id: 'typography-system-css-example',
    component: Slide,
    inputs: {
      title: 'Przykład systemu typografii CSS',
      leftSideContent: {
        minWidth: '450px',
        components: [{
          component: TypographyCss,
        }],
      },
      rightSideContent: {
        minWidth: '450px',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        components: [{
          component: CompleteCodeRenderer,
          inputs: {
            order: 'column-reverse',
            files: [{
              id: 'css',
              filePath: './components/examples/typography-css/base.css',
              value: 'scss',
              text: 'base.css',
            },
            {
              id: 'css-2',
              filePath: './components/examples/typography-css/modified.css',
              value: 'scss',
              text: 'modified.css',
            },
            {
              id: 'css-example-html',
              filePath: './components/examples/typography-css/typography-css.html',
              value: 'html',
              text: 'HTML',
            },
            {
              id: 'css-example-ts',
              filePath: './components/examples/typography-css/typography-css.ts',
              value: 'ts',
              text: 'TS',
            },
            ],
          },
        }],
      },
    },
  },
  {
    id: 'typography-system-scss-example',
    component: Slide,
    inputs: {
      title: 'Przykład systemu typografii SCSS',
      leftSideContent: {
        components: [{
          component: TypographyScss,
        }],
        minWidth: '450px',
      },
      rightSideContent: {
        minWidth: '450px',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        components: [{
          component: CompleteCodeRenderer,
          inputs: {
            order: 'column-reverse',
            files: [{
              id: 'scss',
              filePath: './components/examples/typography-scss/base.scss',
              value: 'scss',
              text: 'base.scss',
            },
            {
              id: 'scss-2',
              filePath: './components/examples/typography-scss/modified.scss',
              value: 'scss',
              text: 'modified.scss',
            },
            {
              id: 'scss-3',
              filePath: './components/examples/typography-scss/typography.scss',
              value: 'scss',
              text: 'typography.scss',
            },
            {
              id: 'scss-example-html',
              filePath: './components/examples/typography-scss/typography-scss.html',
              value: 'html',
              text: 'HTML',
            },
            {
              id: 'scss-example-ts',
              filePath: './components/examples/typography-scss/typography-scss.ts',
              value: 'ts',
              text: 'TS',
            },
            ],
          },
        }],
      },
    },
  },
  {
    id: 'accessibility-section',
    component: SectionTitle,
    inputs: {
      title: 'Dostepność (Accessibility)'
    }
  },
  {
    id: 'accessibility-key-elements',
    component: Slide,
    inputs: {
      title: 'Kluczowe elementy implementacyjne',
      leftSideContent: {
        listPoints: [
          { text: 'Korzystanie z <i>natywnych</i> elementów HTML\'owych', },
          { text: 'Wszystkie funkcje są dostępne tylko za pomocą klawiatury', },
          { text: 'Alternatywny tekst dla zdjęć, transkrypt dla audio/wideo', },
          { text: 'Opisy dla elementów formularzowych', },
          { text: 'Odpowiednie ustawienie języka dla treści na stronie' }
        ],
        listType: 'unordered',
      },
      rightSideContent: {
        justifyContent: 'center',
        listTitle: '<div class="text-centered"><h1 class="md-typescale-display-small text-primary">WCAG</h1> <span class="md-typescale-headline-small text-centered">Web Content Accessibility Guidelines</span></div>'
      }
    },
  },
  {
    id: 'accessibility-custom-elements',
    component: Slide,
    inputs: {
      title: 'Tworzenie własnych elementów',
      leftSideContent: {
        listPoints: [
          { text: 'Implementacja stanów - hover, pressed i focused', },
          { text: 'Implementacja obsługi za pomocą klawiatury', },
          { text: 'Dodanie atrybutów ARIA', },
          { text: 'Dodanie wsparcia dla czytników ekranów' }
        ],
        listType: 'unordered',
      },
    },
  },
  {
    id: 'accessibility-testing-section',
    component: SectionTitle,
    inputs: {
      title: 'Testing'
    }
  },
  {
    id: 'accessibility-testing-tools',
    component: Slide,
    inputs: {
      title: 'Weryfikacja implementacji za pomocą różnych narzędzi',
      leftSideContent: {
        listPoints: [
          { text: 'Contrast checkers - najlepiej na poziomie projektowania', },
          { text: 'Lighthouse w Chrome, Audit w Safari', },
          { text: 'Playwright AXE', },
          { text: 'Storybook Accessibility Addon' }
        ],
        listType: 'unordered',
      },
      rightSideContent: {
        components: [{
          component: PicturesContainer,
          inputs: {
            mainPictureLink: './lighthouse.png',
            leftPictureLink: './storybook.svg',
            topPictureLink: './playwright.svg'
          }
        }],
        minWidth: '450px'
      }
    },
  },
  {
    id: 'accessibility-testing-broken-slide',
    component: BrokenAxeSlide,
  },
  {
    id: 'accessibility-testing-report',
    component: Slide,
    inputs: {
      title: 'Raport Playwright AXE',
      leftSideContent: {
        components: [{
          component: ImageRenderer,
          inputs: {
            imageSrc: './report.png'
          }
        }]
      },
    },
  },
  {
    id: 'summary-section',
    component: SectionTitle,
    inputs: {
      title: 'Podsumowanie'
    }
  },
  {
    id: 'summary',
    component: Slide,
    inputs: {
      title: 'Budowanie aplikacji',
      leftSideContent: {
        listPoints: [
          {
            text: 'Tworzenie systemu kolorów, typografii od początku tworzenia aplikacji',
            list: {
              points: [
                { text: 'Od klienta', },
                { text: 'Przez design', },
                { text: 'Do implementacji' }
              ],
              type: 'unordered'
            }
          },
          { text: 'Planowanie accessibility na początku, a nie w trakcie budowania systemu', },
          {
            text: 'Testowanie rozwiązania odpowiednimi narzędziami',
            points: [
              { text: 'Na różnych urządzeniach', },
              { text: 'Z różnymi użytkownikami', },
              { text: 'Na grupie docelowej' }
            ],
          },
        ],
        listType: 'unordered',
      },
    },
  },
  {
    id: 'real-life-example',
    component: Slide,
    inputs: {
      title: 'Przykład real life',
      leftSideContent: {
        minWidth: '450px',
        components: [{
          component: BrandPage,
          inputs: {
            brandName: 'Coca Cola',
            brandDescription: 'Coca‑Cola to jeden z najpopularniejszych i najchętniej kupowanych napojów gazowanych na świecie. Mimo upływu czasu jej smak pozostaje ten sam. Od 125 lat oparty jest na naturalnych aromatach i pozbawiony konserwantów',
            brandLogo: './CocaCola_logo.png',
            brandClass: 'light brand1',
            cardTitle: 'Produkcja',
            cardDescription: 'W Polsce Coca‑Cola pojawiła się już w 1957 roku na Targach Poznańskich, jednak nie trafiła jeszcze do sklepów. Butelki wyprodukowane i napełnione w naszym kraju zjechały z linii produkcyjnej w 1972 roku. Pierwszego dnia sprzedaży "spragnieni" klienci w ciągu godziny wykupili ponad 5 tysięcy sztuk Coca-Coli!',
            tags: ['Coca‑Cola Original', 'Coca‑Cola Cherry'],
          }
        }],
      },
      rightSideContent: {
        minWidth: '450px',
        components: [{
          component: BrandPage,
          inputs: {
            brandName: 'Sprite',
            brandDescription: 'Marka napoju gazowanego o smaku cytrynowo-limonkowym należąca do The Coca-Cola Company.',
            brandLogo: './Sprite_logo.png',
            brandClass: 'light brand2',
            cardTitle: 'Produkcja',
            cardDescription: 'Napój Sprite został wprowadzony na rynek w USA w 1961 roku, w Polsce od 1991 roku. Jest to odpowiedź firmy na popularny napój 7 Up firmy Pepsi. Sprite produkowany jest w całej Europie i może być słodzony cukrem lub kombinacją cukru i niskokalorycznych substancji słodzących.',
            tags: ['Sprite', 'Sprite Zero'],
          }
        }],
      },
    },
  },
  {
    id: 'real-life-example-code',
    component: Slide,
    inputs: {
      title: 'Przykład real life',
      leftSideContent: {
        components: [{
          component: CompleteCodeRenderer,
          inputs: {
            order: 'column-reverse',
            files: [{
              id: 'brand1-light',
              filePath: './styles/brand1/light.scss',
              value: 'scss',
              text: 'brand 1 - light.scss',
            },
            {
              id: 'brand1-style',
              filePath: './styles/brand1/style.scss',
              value: 'scss',
              text: 'brand 1 - style.scss',
            },
            {
              id: 'brand2-light',
              filePath: './styles/brand2/light.scss',
              value: 'scss',
              text: 'brand 2 - light.scss',
            },
            {
              id: 'brand2-style',
              filePath: './styles/brand2/style.scss',
              value: 'scss',
              text: 'brand 2 - style.scss',
            }],
          },
        }],
        alignItems: 'center'
      },
    }
  },
  {
    id: 'q-and-a',
    component: SectionTitle,
    inputs: {
      title: 'Q & A'
    }
  },
];
