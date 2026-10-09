import os
import json
from datetime import date

vault_root = r'c:\Users\evang\Documents\PROJETOS\ROTEIRO - ORLANDO\Obsidian_Vault'
cal_dir = os.path.join(vault_root, '01 - Calendário de Lotação 2027')
os.makedirs(cal_dir, exist_ok=True)

with open(r'c:\Users\evang\Documents\PROJETOS\ROTEIRO - ORLANDO\scratch\parsed_crowds_2027.json', 'r', encoding='utf-8') as f:
    month_data = json.load(f)

weekdays_pt = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']

month_events = {
    '1': ['Ano Novo (New Year\'s Day)', 'Walt Disney World Marathon Weekend', 'Martin Luther King Jr. Day (Feriado Nacional)', 'Início do EPCOT Festival of the Arts'],
    '2': ['EPCOT International Festival of the Arts', 'Presidents\' Day Weekend (Pico de Lotação)', 'Disney Princess Half Marathon Weekend'],
    '3': ['Início do EPCOT Flower & Garden Festival', 'Spring Break Norte-Americano (Alta Lotação Escolar)'],
    '4': ['Páscoa / Easter Peak', 'Continuação do Spring Break', 'EPCOT International Flower & Garden Festival', 'Disney Springtime Surprise Weekend'],
    '5': ['EPCOT International Flower & Garden Festival', 'Dia das Mães (Mother\'s Day)', 'Memorial Day Weekend (Início do Verão dos EUA / Alta Lotação)'],
    '6': ['Início oficial das férias escolares de verão nos EUA', 'Disney After Hours nos parques selecionados', 'Parques aquáticos com alta procura'],
    '7': ['4 de Julho (Feriado da Independência dos EUA / Pico de Lotação)', 'Verão intenso em Orlando (médias de 33°C)', 'Apresentações noturnas estendidas'],
    '8': ['Primeira quinzena com férias escolares', 'A partir do dia 15: volta às aulas e queda expressiva na lotação', 'Início da Mickey\'s Not-So-Scary Halloween Party no Magic Kingdom'],
    '9': ['Menor lotação do ano inteiro (Níveis 1 a 3 nos dias de semana)', 'Labor Day no primeiro final de semana', 'EPCOT International Food & Wine Festival', 'Halloween Horror Nights na Universal'],
    '10': ['EPCOT International Food & Wine Festival', 'Halloween Horror Nights na Universal', 'Columbus Day / Indigenous Peoples\' Day Weekend', 'Noites de Halloween esgotadas no fim do mês'],
    '11': ['Transição de decorações de Halloween para o Natal da Disney', 'Jersey Week', 'Thanksgiving Weekend (Dia de Ação de Graças / Alta Lotação 8-9/10)', 'Início do EPCOT International Festival of the Holidays'],
    '12': ['Primeira quinzena: clima ameno, decorações natalinas e lotação média (4 a 6)', 'A partir de 20 de dezembro: pico máximo de multidões (10/10)', 'Natal e Réveillon com capacidade máxima nos parques']
}

for m_key, m_info in month_data.items():
    m_num = int(m_key)
    m_name = m_info['name']
    days_dict = m_info['days']
    num_days = m_info['num_days']
    season = m_info['season']
    temp = m_info['temp']
    events_list = month_events.get(m_key, [])

    rows = []
    for d in range(1, num_days + 1):
        lvl = days_dict.get(str(d), days_dict.get(d, 5))
        d_obj = date(2027, m_num, d)
        wk = weekdays_pt[d_obj.weekday()]
        
        if lvl <= 3:
            badge = f'🟢 {lvl}/10 (Baixa Lotação)'
            tip = 'Excelente para parques concorridos (Magic Kingdom / Epic Universe).'
        elif lvl <= 6:
            badge = f'🟡 {lvl}/10 (Média Lotação)'
            tip = 'Dia equilibrado. Chegue cedo para aproveitar o Rope Drop.'
        else:
            badge = f'🔴 {lvl}/10 (Alta Lotação)'
            tip = 'Parque cheio. Recomendado agendar fila rápida ou dia de compras.'
        
        rows.append(f'| {d:02d}/{m_num:02d}/2027 | {wk} | {badge} | {tip} |')

    table_content = '\n'.join(rows)
    events_md = '\n'.join([f'* **{ev}**' for ev in events_list])

    prev_name = month_data[str(m_num - 1)]['name'] if m_num > 1 else ''
    next_name = month_data[str(m_num + 1)]['name'] if m_num < 12 else ''
    prev_m = f'[[{(m_num-1):02d} - {prev_name} 2027|◀ Mês Anterior]]' if m_num > 1 else '—'
    next_m = f'[[{(m_num+1):02d} - {next_name} 2027|Próximo Mês ▶]]' if m_num < 12 else '—'

    file_name = f'{m_num:02d} - {m_name} 2027.md'
    full_path = os.path.join(cal_dir, file_name)

    content = f'''---
title: Calendário de Lotação — {m_name} 2027
aliases: [{m_name} 2027, Lotacao {m_name} 2027]
tags: [lotacao, 2027, {m_name.lower()}, undercover-tourist, orlando]
---

# 📅 Calendário de Lotação — {m_name} de 2027

> [!info] Dados Oficiais e Previsões Analíticas
> Esta tabela apresenta o nível de lotação dia a dia para o mês de **{m_name} de 2027**, baseado no histórico de 20 anos de tempos de fila, padrões de férias dos EUA e venda de ingressos.

---

## 🌤️ Clima & Temporada
* **Faixa de Temporada:** {season}
* **Médias Históricas de Temperatura:** {temp}
* **Metodologia:** Consulte [[00 - Guia Metodológico - O que é o Calendário de Lotação|Como usar o Calendário de Lotação (Regras de Ouro)]]

## 🎉 Principais Feriados & Eventos do Mês
{events_md}

---

## 📊 Matriz Diária de Lotação ({num_days} Dias)

| Data | Dia da Semana | Nível Geral de Lotação | Recomendação Estratégica |
| :---: | :--- | :---: | :--- |
{table_content}

---

## 🧭 Navegação Rápida
* {prev_m} • [[00 - Guia Metodológico - O que é o Calendário de Lotação|Guia Geral]] • [[13 - Tabela Anual Consolidada 2027|Tabela Anual 365 Dias]] • {next_m}
'''

    with open(full_path, 'w', encoding='utf-8') as out_f:
        out_f.write(content)

# Also generate 13 - Tabela Anual Consolidada 2027.md
annual_rows = []
for m_key, m_info in month_data.items():
    m_num = int(m_key)
    m_name = m_info['name']
    days_dict = m_info['days']
    num_days = m_info['num_days']
    avg_lvl = round(sum(days_dict.values()) / len(days_dict), 1)
    min_lvl = min(days_dict.values())
    max_lvl = max(days_dict.values())
    annual_rows.append(f'| [[{m_num:02d} - {m_name} 2027|{m_name}]] | {m_info["season"]} | {m_info["temp"]} | **{avg_lvl}/10** | {min_lvl}/10 (Mín) | {max_lvl}/10 (Máx) |')

annual_table = '\n'.join(annual_rows)
annual_content = f'''---
title: Tabela Anual Consolidada — 2027 (365 Dias)
aliases: [Ano 2027, Resumo 2027, Calendario Anual]
tags: [lotacao, 2027, anual, orlando]
---

# 🗓️ Tabela Anual Consolidada de Lotação — 2027

Visão macro dos 12 meses do ano para escolha do período ideal da sua viagem a Orlando.

| Mês | Faixa de Temporada | Clima Médio | Média Geral | Menor Lotação | Maior Lotação |
| :--- | :--- | :--- | :---: | :---: | :---: |
{annual_table}

---
> [!tip] Conclusão para Planejamento
> * **Mês com menor lotação geral:** **Setembro** (média 4.3/10 — semanas inteiras com notas 2 e 3).
> * **Meses mais equilibrados (clima agradável + lotação média):** **Fevereiro** (início do mês), **Maio** (fora do Memorial Day) e **Novembro** (fora da semana de Ação de Graças).
> * **Meses de pico absoluto (evite se quiser fugir de multidões):** **Páscoa (Abril)**, **4 de Julho** e **últimas semanas de Dezembro**.
'''

with open(os.path.join(cal_dir, '13 - Tabela Anual Consolidada 2027.md'), 'w', encoding='utf-8') as f:
    f.write(annual_content)

print('All 13 calendar vault notes generated successfully!')
