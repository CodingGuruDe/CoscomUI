<template>
    <DocSectionText v-bind="$attrs">
        <p>Accordion consists of one or more AccordionTab elements which are collapsed by default. Tab to expand initially can be defined with the <i>activeIndex</i> property.</p>
    </DocSectionText>
    <div class="card">
        <Accordion :activeIndex="0">
            <AccordionTab header="Who are we?">
                <p class="m-0">
                    Das COSCOM ECO-System ist ein modulares Applikationssystem, basierend auf einer zentralen Datenplattform. Wo Sie einsteigen, bestimmen Sie! Wir analysieren die Ist-Situation Ihrer Fertigungsprozesse, identifizieren
                    Optimierungsansätze in Digitalisierungsvorhaben über das Prozess-Consulting und erstellen einen erfolgreichen Umsetzungsplan für die Datenvernetzung und die Beschaffungs- und Logistikprozesse in der Planung und Fertigung der
                    CNC-Zerspanung.
                </p>
            </AccordionTab>
            <AccordionTab header="What do we do?">
                <p class="m-0">
                    Mit den passenden Applikationsmodulen ToolDIRECTOR und FactoryDIRECTOR verschmelzen Werkzeugdaten, Artikel- und Fertigungsdaten zu einem intelligenten Datenpool für alle Prozessteilnehmer in der CNC-Fertigung – einschließlich
                    einer intuitiven und benutzerfreundlichen Oberfläche. Mit ProfiCAM bietet COSCOM ein leistungsstarkes CAD/CAM-System, dass optional zum Einsatz kommen kann.
                </p>
            </AccordionTab>
            <AccordionTab header="What do we offer?">
                <p class="m-0">
                    Für marktbekannte CAD/CAM- und Simualtionssysteme bietet das COSCOM ECO-System standardisierte Integrationsmodule. COSCOM DNC sorgt für eine einwandfreie Kommunikation zwischen Datenserver und Werkzeugmaschinen. Mit über 40 Jahren
                    Umsetzungskompetenz betrachten wir alle Projektschritte und Lösungen vorwiegend unter dem wichtigen Aspekt der IT-Security.
                </p>
            </AccordionTab>
        </Accordion>
    </div>
    <DocSectionCode :code="code" hideCodeSandbox />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Accordion :activeIndex="0">
    <AccordionTab header="Header I">
        <p class="m-0">
            Das COSCOM ECO-System ist ein modulares Applikationssystem, basierend auf einer zentralen Datenplattform. Wo Sie einsteigen, bestimmen Sie! Wir analysieren die Ist-Situation Ihrer Fertigungsprozesse, identifizieren
            Optimierungsansätze in Digitalisierungsvorhaben über das Prozess-Consulting und erstellen einen erfolgreichen Umsetzungsplan für die Datenvernetzung und die Beschaffungs- und Logistikprozesse in der Planung und Fertigung der CNC-Zerspanung.
        </p>
    </AccordionTab>
    <AccordionTab header="Header II">
        <p class="m-0">
            Mit den passenden Applikationsmodulen ToolDIRECTOR und FactoryDIRECTOR verschmelzen Werkzeugdaten, Artikel- und Fertigungsdaten zu einem intelligenten Datenpool für alle Prozessteilnehmer in der CNC-Fertigung – einschließlich einer intuitiven und benutzerfreundlichen Oberfläche. Mit ProfiCAM bietet COSCOM ein leistungsstarkes CAD/CAM-System, dass optional zum Einsatz kommen kann.
        </p>
    </AccordionTab>
    <AccordionTab header="Header III">
        <p class="m-0">
            Für marktbekannte CAD/CAM- und Simualtionssysteme bietet das COSCOM ECO-System standardisierte Integrationsmodule. COSCOM DNC sorgt für eine einwandfreie Kommunikation zwischen Datenserver und Werkzeugmaschinen. Mit über 40 Jahren Umsetzungskompetenz betrachten wir alle Projektschritte und Lösungen vorwiegend unter dem wichtigen Aspekt der IT-Security.
        </p>
    </AccordionTab>
</Accordion>
`,
                options: `
<template>
    <div class="card">
        <Accordion :activeIndex="0">
            <AccordionTab header="Header I">
                <p class="m-0">
                    Das COSCOM ECO-System ist ein modulares Applikationssystem, basierend auf einer zentralen Datenplattform. Wo Sie einsteigen, bestimmen Sie! Wir analysieren die Ist-Situation Ihrer Fertigungsprozesse, identifizieren
            Optimierungsansätze in Digitalisierungsvorhaben über das Prozess-Consulting und erstellen einen erfolgreichen Umsetzungsplan für die Datenvernetzung und die Beschaffungs- und Logistikprozesse in der Planung und Fertigung der CNC-Zerspanung.
                </p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p class="m-0">
                    Mit den passenden Applikationsmodulen ToolDIRECTOR und FactoryDIRECTOR verschmelzen Werkzeugdaten, Artikel- und Fertigungsdaten zu einem intelligenten Datenpool für alle Prozessteilnehmer in der CNC-Fertigung – einschließlich einer intuitiven und benutzerfreundlichen Oberfläche. Mit ProfiCAM bietet COSCOM ein leistungsstarkes CAD/CAM-System, dass optional zum Einsatz kommen kann.
                </p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p class="m-0">
                    Für marktbekannte CAD/CAM- und Simualtionssysteme bietet das COSCOM ECO-System standardisierte Integrationsmodule. COSCOM DNC sorgt für eine einwandfreie Kommunikation zwischen Datenserver und Werkzeugmaschinen. Mit über 40 Jahren
                    Umsetzungskompetenz betrachten wir alle Projektschritte und Lösungen vorwiegend unter dem wichtigen Aspekt der IT-Security.
                </p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Accordion :activeIndex="0">
            <AccordionTab header="Header I">
                <p class="m-0">
                    Das COSCOM ECO-System ist ein modulares Applikationssystem, basierend auf einer zentralen Datenplattform. Wo Sie einsteigen, bestimmen Sie! Wir analysieren die Ist-Situation Ihrer Fertigungsprozesse, identifizieren
            Optimierungsansätze in Digitalisierungsvorhaben über das Prozess-Consulting und erstellen einen erfolgreichen Umsetzungsplan für die Datenvernetzung und die Beschaffungs- und Logistikprozesse in der Planung und Fertigung der CNC-Zerspanung.
                </p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p class="m-0">
                    Mit den passenden Applikationsmodulen ToolDIRECTOR und FactoryDIRECTOR verschmelzen Werkzeugdaten, Artikel- und Fertigungsdaten zu einem intelligenten Datenpool für alle Prozessteilnehmer in der CNC-Fertigung – einschließlich einer intuitiven und benutzerfreundlichen Oberfläche. Mit ProfiCAM bietet COSCOM ein leistungsstarkes CAD/CAM-System, dass optional zum Einsatz kommen kann.
                </p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p class="m-0">
                    Für marktbekannte CAD/CAM- und Simualtionssysteme bietet das COSCOM ECO-System standardisierte Integrationsmodule. COSCOM DNC sorgt für eine einwandfreie Kommunikation zwischen Datenserver und Werkzeugmaschinen. Mit über 40 Jahren
                    Umsetzungskompetenz betrachten wir alle Projektschritte und Lösungen vorwiegend unter dem wichtigen Aspekt der IT-Security.
                </p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
