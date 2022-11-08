# fxgcomponentsambie001

Package npm et storybook pour le cours Installation Web et Soutien Technique

## Installation

```
yarn install

yarn storybook
```

# Description

Bibliothèque de 5 composantes React réutilisables :

-   [Bouton](#bouton)
-   [CaseCocher](#casecocher)
-   [Liste](#liste)
-   [MenuSimple](#menusimple)
-   [PaginationSimple](#paginationsimple)
    <br><br>

# Liste des composantes

## Bouton

La composante "Bouton" a une fonction appelée "Bouton" possédant six arguments :

1. type :

    - Type : "default","primary","ghost","dashed","link","text"
    - A pour objectif de déterminer le type du bouton. Par exemple, "dashed" fait un contour pointillé.

2. size :

    - Type : "large","middle","small"
    - A pour objectif de déterminer la largeur du bouton.

3. shape :

    - Type : "default","circle","round"
    - A pour objectif de déterminer la forme du bouton.

4. text :

    - Type : string
    - Permet de déterminer le text du bouton.

5. link :

    - Type : string
    - Permet d'ajouter un lien href au bouton.

6. disabled :
    - Type : boolean
    - Il est à false par défaut. Permet de désactiver le bouton.

**Exemple :**

```
<Bouton
  shape="circle"
  size="large"
  text="Primary Large Circle"
  type="primary"
/>
```

<p align="right" dir="auto"><a href="#description">:arrow_up:</a></p>

## CaseCocher

La composante "CaseCocher" a une fonction appelée "CaseCocher" possédant quatre arguments :

1. label :

    - Type : string
    - Permet de déterminer le text de la case à cocher.

2. checked :

    - Type : boolean
    - Il est à false par défaut. Permet de cocher la case à cocher.

3. disabled :
    - Type : boolean
    - Il est à false par défaut. Permet de désactiver la case à cocher.

**Exemple :**

```
<CaseCocher
  label="Case à Cocher"
/>
```

<p align="right" dir="auto"><a href="#description">:arrow_up:</a></p>

## Liste

La composante "Liste" a une fonction appelée "Liste" possédant quatre arguments :

1. size :

    - Type : "large","default","small"
    - A pour objectif de déterminer la largeur de la liste.

2. header :

    - Type : string
    - A pour objectif de déterminer l'en-tête de la liste. Si non-spécifié, il n'y a pas d'en-tête'.

3. data :

    - Type : array
    - A pour objectif de déterminer les données de la liste.

4. footer :

    - Type : string
    - A pour objectif de déterminer le pied de page de la liste. Si non-spécifié, il n'y a pas de pied de page.

**Exemple :**

```
<Liste
  data={[
    'Ligne 1',
    'Ligne 2',
    'Ligne 3'
  ]}
  footer="Pied de page"
  header="Entête"
  size="small"
/>
```

<p align="right" dir="auto"><a href="#description">:arrow_up:</a></p>

## MenuSimple

La composante "MenuSimple" a une fonction appelée "MenuSimple" possédant trois arguments :

1. size :

    - Type : "large","default","small"
    - A pour objectif de déterminer la largeur du menu.

2. mode :

    - Type : 'vertical','horizontal','inline'
    - A pour objectif de déterminer le mode dont l'orientation du menu.

3. items :

    - Type : array
    - A pour objectif de déterminer les items du menu. Le format permet d'avoir des sous-menus.

**Exemple :**

```
<MenuSimple
  items={[
    {
      key: 'item-1',
      label: 'item 1'
    },
    {
      key: 'item-2',
      label: 'item 2'
    },
    {
      children: [
        {
          key: 'submenu-item-1',
          label: 'item 3'
        }
      ],
      key: 'submenu',
      label: 'sub menu'
    }
  ]}
  mode="inline"
  size="default"
/>
```

<p align="right" dir="auto"><a href="#description">:arrow_up:</a></p>

## PaginationSimple

La composante "PaginationSimple" a une fonction appelée "PaginationSimple" possédant quatre arguments :

1. current :

    - Type: number
    - A pour objectif de déterminer le numéro de la page courante.

2. total :

    - Type: number
    - A pour objectif de déterminer le nombre d'éléments total à paginer.

3. pageSize :

    - Type: number
    - A pour objectif de déterminer le nombre d'éléments par page.

4. size:

    - Type: "default","small"
    - A pour objectif de déterminer la largeur de la pagination.

**Exemple :**

```
<PaginationSimple
  current={1}
  size="small"
  total={50}
/>
```

<p align="right" dir="auto"><a href="#description">:arrow_up:</a></p>
