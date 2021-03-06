/*globals methodDraw */
methodDraw.readLang({
	lang: "de",
	dir : "ltr",
	common: {
		"ok": "OK",
		"cancel": "Abbrechen",
		"key_backspace": "Rücktaste", 
		"key_del": "Löschen", 
		"key_down": "nach unten", 
		"key_up": "nach oben", 
		"more_opts": "More Options",
		"url": "URL",
		"width": "Breite",
		"height": "Höhe"
	},
	misc: {
		"powered_by": "angetrieben durch"
	}, 
	ui: {
		"toggle_stroke_tools": "Zeige/Verberge weitere Linien Werkzeuge",
		"palette_info": "Klick zum Ändern der Füllfarbe, Shift-Klick zum Ändern der Linienfarbe",
		"zoom_level": "vergrößern",
		"panel_drag": "Drag left/right to resize side panel"
	},
	properties: {
		"id": "Identify the element",
		"fill_color": "Füllfarbe ändern",
		"stroke_color": "Linienfarbe ändern",
		"stroke_style": "Linienstil ändern",
		"stroke_width": "Linienbreite ändern",
		"pos_x": "Ändere die X Koordinate",
		"pos_y": "Ändere die Y Koordinate",
		"linecap_butt": "Form der Linienendung: Stumpf",
		"linecap_round": "Form der Linienendung: Rund",
		"linecap_square": "Form der Linienendung: Rechteckig",
		"linejoin_bevel": "Zusammentreffen von zwei Linien: abgeschrägte Kante",
		"linejoin_miter": "Zusammentreffen von zwei Linien: Gehrung",
		"linejoin_round": "Zusammentreffen von zwei Linien: Rund",
		"angle": "Drehwinkel ändern",
		"blur": "Ändere Gaußschen Weichzeichner Wert",
		"opacity": "Opazität des ausgewählten Objekts ändern",
		"circle_cx": "Kreiszentrum (cx) ändern",
		"circle_cy": "Kreiszentrum (cy) ändern",
		"circle_r": "Kreisradius (r) ändern",
		"ellipse_cx": "Ellipsenzentrum (cx) ändern",
		"ellipse_cy": "Ellipsenzentrum (cy) ändern",
		"ellipse_rx": "Ellipsenradius (x) ändern",
		"ellipse_ry": "Ellipsenradius (y) ändern",
		"line_x1": "X-Koordinate des Linienanfangs ändern",
		"line_x2": "X-Koordinate des Linienendes ändern",
		"line_y1": "Y-Koordinate des Linienanfangs ändern",
		"line_y2": "Y-Koordinate des Linienendes ändern",
		"rect_height": "Höhe des Rechtecks ändern",
		"rect_width": "Breite des Rechtecks ändern",
		"corner_radius": "Eckenradius des Rechtecks ändern",
		"image_width": "Bildbreite ändern",
		"image_height": "Bildhöhe ändern",
		"image_url": "URL ändern",
		"node_x": "Ändere die X Koordinate des Knoten",
		"node_y": "Ändere die Y Koordinate des Knoten",
		"seg_type": "Ändere den Typ des Segments",
		"straight_segments": "Gerade",
		"curve_segments": "Kurve",
		"text_contents": "Textinhalt erstellen und bearbeiten",
		"font_family": "Schriftart wählen",
		"font_size": "Schriftgröße einstellen",
		"bold": "Fetter Text",
		"italic": "Kursiver Text"
	},
	tools: { 
		"main_menu": "Hauptmenü",
		"bkgnd_color_opac": "Hintergrundfarbe ändern / Opazität",
		"connector_no_arrow": "Kein Pfeil",
		"fitToContent": "An den Inhalt anpassen",
		"fit_to_all": "An gesamten Inhalt anpassen",
		"fit_to_canvas": "An die Zeichenfläche anpassen",
		"fit_to_layer_content": "An Inhalt der Ebene anpassen",
		"fit_to_sel": "An die Auswahl anpassen",
		"align_relative_to": "Relativ zu einem anderem Objekt ausrichten ...",
		"relativeTo": "im Vergleich zu:",
		"Seite": "Seite",
		"largest_object": "größtes Objekt",
		"selected_objects": "gewählte Objekte",
		"smallest_object": "kleinstes Objekt",
		"new_doc": "Neues Bild",
		"open_doc": "Bild öffnen",
		"export_img": "Export",
		"save_doc": "Bild speichern",
		"import_doc": "Importiere SVG",
		"align_to_page": "Align Element to Page",
		"align_bottom": "Unten ausrichten",
		"align_center": "Zentriert ausrichten",
		"align_left": "Linksbündig ausrichten",
		"align_middle": "In der Mitte ausrichten",
		"align_right": "Rechtsbündig ausrichten",
		"align_top": "Oben ausrichten",
		"mode_select": "Objekte auswählen und verändern",
		"mode_fhpath": "Freihandlinien zeichnen",
		"mode_line": "Linien zeichnen",
		"mode_connect": "Verbinde zwei Objekte",
		"mode_rect": "Rectangle Tool",
		"mode_square": "Square Tool",
		"mode_fhrect": "Freihand Rechteck",
		"mode_ellipse": "Ellipse",
		"mode_circle": "Kreis",
		"mode_fhellipse": "Freihand Ellipse",
		"mode_path": "Pfad zeichnen",
		"mode_shapelib": "Form-Bibliothek",
		"mode_text": "Text erstellen und bearbeiten",
		"mode_image": "Bild einfügen",
		"mode_zoom": "Zoomfaktor vergrößern oder verringern",
		"mode_eyedropper": "Ableger",
		"no_embed": "Hinweis: Dieses Bild kann nicht eingebettet werden. Eine Anzeige hängt von diesem Pfad ab.",
		"undo": "Rückgängig",
		"redo": "Wiederherstellen",
		"tool_source": "Quellecode bearbeiten",
		"wireframe_mode": "Drahtmodell Modus",
		"toggle_grid": "Zeige/Verstecke Gitternetz",
		"clone": "Klone Element(e)",
		"del": "Lösche Element(e)",
		"group_elements": "Gruppieren Element(e)",
		"make_link": "Make (hyper)link",
		"set_link_url": "Set link URL (leave empty to remove)",
		"to_path": "Gewähltes Objekt in einen Pfad konvertieren",
		"reorient_path": "Neuausrichtung des Pfades",
		"ungroup": "Gruppierung aufheben",
		"docprops": "Dokument-Eigenschaften",
		"imagelib": "Bilder-Bibliothek",
		"move_bottom": "Die gewählten Objekte nach ganz unten schieben",
		"move_top": "Die gewählten Objekte nach ganz oben anheben",
		"node_clone": "Klone den Knoten",
		"node_delete": "Lösche den Knoten",
		"node_link": "Gekoppelte oder separate Kontroll Punkte für die Bearbeitung des Pfades",
		"add_subpath": "Teilpfad hinzufügen",
		"openclose_path": "Öffne/Verbinde Unterpfad",
		"source_save": "Änderungen akzeptieren",
		"cut": "Ausschneiden",
		"copy": "Kopieren",
		"paste": "Einfügen",
		"paste_in_place": "An Originalposition einfügen",
		"Löschen": "Löschen",
		"group": "Gruppieren",
		"move_front": "Nach ganz oben anheben",
		"move_up": "Anheben",
		"move_down": "Absenken",
		"move_back": "Nach ganz unten absenken"
	},
	layers: {
		"layer": "Ebene",
		"layers": "Ebenen",
		"del": "Ebene löschen",
		"move_down": "Ebene nach unten verschieben",
		"new": "Neue Ebene",
		"rename": "Ebene umbenennen",
		"move_up": "Ebene nach oben verschieben",
		"dupe": "Duplicate Layer",
		"merge_down": "Merge Down",
		"merge_all": "Merge All",
		"move_elems_to": "Verschiebe ausgewählte Objekte:",
		"move_selected": "Verschiebe ausgewählte Objekte auf eine andere Ebene"
	},
	config: {
		"image_props": "Bildeigenschaften",
		"doc_title": "Titel",
		"doc_dims": "Dimension der Zeichenfläche",
		"included_images": "Eingefügte Bilder",
		"image_opt_embed": "Daten einbetten (lokale Dateien)",
		"image_opt_ref": "Benutze die Datei Referenz",
		"editor_prefs": "Editor Einstellungen",
		"icon_size": "Symbol Abmessungen",
		"language": "Sprache",
		"background": "Editor Hintergrund",
		"editor_img_url": "Image URL",
		"editor_bg_note": "Anmerkung: Der Hintergrund wird mit der Speicherung des Bildes nicht gespeichert.",
		"icon_large": "Groß",
		"icon_medium": "Mittel",
		"icon_small": "Klein",
		"icon_xlarge": "Sehr Groß",
		"select_predefined": "Auswahl einer vordefinierten:",
		"units_and_rulers": "Einheiten und Lineale",
		"show_rulers": "Zeige Lineale",
		"base_unit": "Basiseinheit:",
		"grid": "Gitternetz",
		"snapping_onoff": "Einrasten an/aus",
		"snapping_stepsize": "Einrastungs Abstand:",
		"grid_color": "Grid color"
	},
	shape_cats: {
		"basic": "Standard",
		"object": "Objekte",
		"symbol": "Symbole",
		"arrow": "Pfeile",
		"flowchart": "Flussdiagramme",
		"animal": "Tiere",
		"game": "Spielkarten und Schach",
		"dialog_balloon": "Sprechblasen",
		"electronics": "Elektronik",
		"math": "Mathematik",
		"music": "Musik",
		"misc": "Sonstige",
		"raphael_1": "raphaeljs.com set 1",
		"raphael_2": "raphaeljs.com set 2"
	},
	imagelib: {
		"select_lib": "Select an image library",
		"show_list": "Show library list",
		"import_single": "Import single",
		"import_multi": "Import multiple",
		"open": "Open as new document"
	},
	notification: {
		"invalidAttrValGiven":"Fehlerhafter Wert",
		"noContentToFitTo":"Kein Inhalt anzupassen",
		"dupeLayerName":"Eine Ebene hat bereits diesen Namen!",
		"enterUniqueLayerName":"Verwenden Sie einen eindeutigen Namen für die Ebene",
		"enterNewLayerName":"Geben Sie bitte einen neuen Namen für die Ebene ein",
		"layerHasThatName":"Eine Ebene hat bereits diesen Namen",
		"QmoveElemsToLayer":"Verschiebe ausgewählte Objekte in die Ebene '%s'?",
		"QwantToClear":"Möchten Sie die Zeichnung löschen?\nDadurch wird auch die Rückgängig Funktion zurückgesetzt!",
		"QwantToOpen":"Do you want to open a new file?\nThis will also erase your undo history!",
		"QerrorsRevertToSource":"Die Syntaxanalyse Ihrer SVG Quelle enthält Fehler.\nOriginal SVG wiederherstellen?",
		"QignoreSourceChanges":"Soll die Änderung am SVG Quelltext ignoriert werden?",
		"featNotSupported":"Diese Eigenschaft wird nicht unterstützt",
		"enterNewImgURL":"Geben Sie die URL für das neue Bild an",
		"defsFailOnSave": "Hinweis: Aufgrund eines Fehlers in Ihrem Browser, kann dieses Bild falsch angezeigt werden (fehlende Gradienten oder Elemente). Es wird jedoch richtig angezeigt sobald es tatsächlich gespeichert wird.",
		"loadingImage":"Bild wird geladen, bitte warten ...",
		"saveFromBrowser": "Wählen Sie \"Speichern unter ...\" in Ihrem Browser, um das Bild als Datei %s zu speichern.",
		"noteTheseIssues": "Beachten Sie außerdem die folgenden Probleme: ",
		"unsavedChanges": "There are unsaved changes.",
		"enterNewLinkURL": "Enter the new hyperlink URL",
		"errorLoadingSVG": "Error: Unable to load SVG data",
		"URLloadFail": "Unable to load from URL",
		"retrieving": "Retrieving \"%s\"..."
	},
	confirmSetStorage: {
		message: "By default and where supported, SVG-Edit can store your editor "+
		"preferences and SVG content locally on your machine so you do not "+
		"need to add these back each time you load SVG-Edit. If, for privacy "+
		"reasons, you do not wish to store this information on your machine, "+
		"you can change away from the default option below.",
		storagePrefsAndContent: "Store preferences and SVG content locally",
		storagePrefsOnly: "Only store preferences locally",
		storagePrefs: "Store preferences locally",
		storageNoPrefsOrContent: "Do not store my preferences or SVG content locally",
		storageNoPrefs: "Do not store my preferences locally",
		rememberLabel: "Remember this choice?",
		rememberTooltip: "If you choose to opt out of storage while remembering this choice, the URL will change so as to avoid asking again."
	}
});